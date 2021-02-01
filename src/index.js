import React from 'react';
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware, compose} from 'redux' //set up store
import thunk from 'redux-thunk'   //asynchronous
import { Provider } from 'react-redux' //any component wrapped in provider will access to the store
import  galleryReducer  from './reducers/galleryReducer'
import App from './App';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(galleryReducer, composeEnhancer(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <App/>

  </Provider>,
  document.getElementById('root'));


