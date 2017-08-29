import { combineReducers } from 'redux';

import tiles from './tiles';
import activeCat from './activeCat';
import infoWindow from './infoWindow';
import addWindowActive from './addWindowActive';
import searchResults from './searchResults';
import bookInfoReq from './bookInfoReq';

const bookInfoApp = combineReducers({
  tiles,
  activeCat,
  infoWindow,
  addWindowActive,
  searchResults,
  bookInfoReq
});

export default bookInfoApp;
