import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import bookInfoApp from './reducers';
import App from './components/App';
import './index.css'
import { addTile } from './actions';

const { Map, List } = require('immutable');

const data = require('./test/mock_data.json');

let store = createStore(bookInfoApp);

// Replace this with actual loaded data
for (const cat in data) {
  for (const elt in data[cat]) {
    store.dispatch(addTile({
      'title': data[cat][elt]['title'],
      'authors': data[cat][elt]['authors'],
      'category': cat
    }));
  }
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
