const { Map } = require('immutable');

const searchResults = (state = Map({ isFetching: false,
    isValid: false }),
    action) => {
  switch (action.type) {
    case 'REQUEST_SEARCH':
      return Map({ isFetching: true, isValid: false });
    case 'RECEIVE_SEARCH':
      return state.mergeWith((oldVal, newVal) => newVal,
        {
          results: action.results,
          isValid: true,
          isFetching: false,
          recievedAt: action.receivedAt
        });
    default:
      return state;
  }
};

export default searchResults;
