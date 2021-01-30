import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux'; //set up store
import thunk from 'redux-thunk';   //asynchronous
import {provider} from 'react-redux' //any component wrapped in provider will access to the store
import App from './App';

ReactDOM.render(<App/>,
  document.getElementById('root'));


