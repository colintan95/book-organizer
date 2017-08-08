import { combineReducers } from 'redux';

import tiles from './tiles';
import activeCat from './activeCat';

const bookInfoApp = combineReducers({
  tiles,
  activeCat
});

export default bookInfoApp;
