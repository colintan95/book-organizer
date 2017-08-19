import { combineReducers } from 'redux';

import tiles from './tiles';
import activeCat from './activeCat';
import tileWindowActive from './tileWindowActive'

const bookInfoApp = combineReducers({
  tiles,
  activeCat,
  tileWindowActive
});

export default bookInfoApp;
