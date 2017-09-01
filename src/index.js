import thunkMiddleware from 'redux-thunk';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import bookInfoApp from './reducers';
import App from './components/App';
import './index.css'
import { addTile } from './actions';

// DEBUGGING
import { fetchSearchResults } from './actions';
import { openAddWindow } from './actions';
import { fetchBookInfo } from './actions';
// DEBUGGING

//const express = require('express');
//const { Map, List } = require('immutable');

const data = require('./test/mock_data.json');

let store = createStore(
  bookInfoApp,
  applyMiddleware(
    thunkMiddleware
  )
);

// Replace this with actual loaded data
/*
for (const cat in data) {
  for (const elt in data[cat]) {
    store.dispatch(addTile({
      'title': data[cat][elt]['title'],
      'authors': data[cat][elt]['authors'],
      'category': cat
    }));
  }
}
*/

// DEBUGGING
//fetch('/users?q=Superforecasting').then(res => res.json())
//  .then(data => console.log(data));
//fetch('/users?id=23995360').then(res => res.json())
//.then(data => console.log(data));
//store.dispatch(fetchSearchResults('Superforecasting'));
//store.dispatch(openAddWindow());
//store.dispatch(fetchBookInfo('23995360'));
store.dispatch(fetchBookInfo('23995360',true));


// DEBUGGING

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
