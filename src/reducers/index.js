import { combineReducers } from 'redux';

import tiles from './tiles';
import activeCat from './activeCat';
import infoWindowActive from './infoWindowActive';
import addWindowActive from './addWindowActive';
import searchResults from './searchResults';

const bookInfoApp = combineReducers({
  tiles,
  activeCat,
  infoWindowActive,
  addWindowActive,
  searchResults
});

export default bookInfoApp;
