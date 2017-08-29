import { updateInfoWindow } from '../actions';

const { Map } = require('immutable');

const bookInfoReq = (state = Map({ isFetching: false,
    isValid: false }),
    action) => {
  switch (action.type) {
    case 'REQUEST_BOOKINFO':
      return Map({ isFetching: true, isValid: false });
    case 'RECEIVE_BOOKINFO':
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

export default bookInfoReq;
