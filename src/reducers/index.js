import { combineReducers } from 'redux';

import tiles from './tiles';
import activeCat from './activeCat';
import infoWindowActive from './infoWindowActive';
import addWindowActive from './addWindowActive';

const bookInfoApp = combineReducers({
  tiles,
  activeCat,
  infoWindowActive,
  addWindowActive
});

export default bookInfoApp;
