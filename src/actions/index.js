import fetch from 'isomorphic-fetch';

const { fromJS } = require('immutable');

export const addTile = info => ({
  type: 'ADD_TILE',
  ...info
});

export const openInfoWindow = () => ({
  type: 'OPEN_INFOWINDOW'
});

export const closeInfoWindow = () => ({
  type: 'CLOSE_INFOWINDOW'
});

export const updateInfoWindow = bookInfo => ({
  type: 'UPDATE_INFOWINDOW',
  ...bookInfo
})

export const openAddWindow = () => ({
  type: 'OPEN_ADDWINDOW'
});

export const closeAddWindow = () => ({
  type: 'CLOSE_ADDWINDOW'
});

export const searchBooks = (searchValue = "") => ({
  type: 'SEARCH_BOOKS',
  searchValue
});

export const requestSearch = (searchValue) => ({
  type: 'REQUEST_SEARCH',
  searchValue
});

export const receiveSearch = (searchValue, results, failed = false) => ({
  type: 'RECEIVE_SEARCH',
  searchValue,
  results,
  failed,
  receivedAt: Date.now()
});

export function fetchSearchResults(searchValue) {
  return function(dispatch) {
    dispatch(requestSearch(searchValue));

    return fetch('/users?q=' + searchValue)
      .then(
        response => response.json(),
        error => {
          console.log('An error occured.', error);
          dispatch(receiveSearch(searchValue, {}, true));
        }
      )
      .then(json => {
        console.log(json);
        dispatch(receiveSearch(searchValue,
          fromJS(json),
          false));
      })
  };
}

export const requestBookInfo = id => ({
  type: 'REQUEST_BOOKINFO',
  id
});

export const receiveBookInfo = (id, results, failed = false) => ({
  type: 'RECEIVE_BOOKINFO',
  id,
  results,
  failed,
  receivedAt: Date.now()
});

export function fetchBookInfo(id, add=false) {
  return function(dispatch) {
    dispatch(requestBookInfo(id));

    return fetch('/users?id=' + id)
      .then(
        response => response.json(),
        error => {
          console.log('An error occured.', error);
          dispatch(receiveBookInfo(id, {}, true));
        }
      )
      .then(json => {
        if (add) {
          dispatch(addTile({
            id: id,
            title: json.title,
            authors: json.authors,
            isbn: json.isbn,
            description: json.description,
            imageUrl: json.imageUrl,
            category: 'nocat',
          }));
        }
        dispatch(receiveBookInfo(id,
          fromJS(json),
          false));
      });
  };
}
