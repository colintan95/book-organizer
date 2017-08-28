import fetch from 'isomorphic-fetch';

const { fromJS } = require('immutable');

export const addTile = info => ({
  type: 'ADD_TILE',
    ...info
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

export const openInfoWindow = tile => ({
  type: 'OPEN_INFOWINDOW'
});

export const closeInfoWindow = () => ({
  type: 'CLOSE_INFOWINDOW'
});

export const openAddWindow = (searchValue = "") => ({
  type: 'OPEN_ADDWINDOW'
});

export const closeAddWindow = () => ({
  type: 'CLOSE_ADDWINDOW'
});

export function fetchSearchResults(searchValue) {
  return function(dispatch) {
    dispatch(requestSearch(searchValue));

    return fetch('/users' + '?q=' + searchValue)
      .then(
        response => response.json(),
        error => {
          console.log('An error occured.', error);
          dispatch(receiveSearch(searchValue, {}, true));
        }
      )
      .then(json => {
        dispatch(receiveSearch(searchValue,
          fromJS(json),
          false));
      })
  };
}
