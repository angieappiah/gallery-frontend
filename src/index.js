import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import {createStore, applyMiddleware, compose} from 'redux' 
import thunk from 'redux-thunk' 
import {BrowserRouter as Router} from 'react-router-dom'
import { Provider } from 'react-redux' //any component wrapped in provider will access to the store
import  galleryReducer  from './reducers/galleryReducer'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(galleryReducer, composeEnhancer(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <Router>
   
    <App/>

    </Router>
  </Provider>,
  document.getElementById('root'));


