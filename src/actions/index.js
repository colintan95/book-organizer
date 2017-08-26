import fetch from 'isomorphic-fetch'

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

export const receiveSearch = (searchValue) => ({
  type: 'RECEIVE_SEARCH',
  searchValue,
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

    return fetch('https://www.goodreads.com/search.xml' +
        '?key=Gj0MEsrnsUooEP9LzKrMw&q=' + searchValue,
        { method: 'GET', headers: new Headers(), mode: 'cors' })
      .then(
        response => response.json(),
        error => console.log('An error occured.', error)
      )
      .then(json =>
        dispatch(receiveSearch(searchValue))
      )
  };
}
