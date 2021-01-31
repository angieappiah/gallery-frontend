import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware,compose} from 'redux'; //set up store
import thunk from 'redux-thunk';   //asynchronous
import {provider} from 'react-redux' //any component wrapped in provider will access to the store
import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <provider store={store}>
    <App/>

  </provider>
,
  document.getElementById('root'));


