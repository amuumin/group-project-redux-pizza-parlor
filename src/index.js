import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// Redux Logger is Middleware
import logger from 'redux-logger';


//reducers
const pizzas = (state = [], action) => {
    if (action.type === 'ALL_PIZZAS') {
        return action.payload;
      }
      return state;
    }


  const info = (state = {}, action) => {
    switch (action.type) {
        case "ADD_CUSTOMER":
          return action.payload;
      }
      return state;
    }
  

  const cart = (state = [], action) => {
    switch (action.type) {
        case "ADD_TO_CART":
          
          return [
            ...state,
            action.payload
          ]
        //TODO remove by id on click from pizzaSelect
        case "REMOVE_FROM_CART":
          return state.filter((item => item.name !== action.payload.name))
          
        case "SET_CLEAR_CART":
          return state = [];
      }
      return state;
    }


  ///combine reducers and create store

const storeInstance = createStore(
    combineReducers({
     //this is out redux store

 
      pizzas,
      info,
      cart,
    }),
    // use the logger as "middleware"
    // to log our actions and state
    applyMiddleware(logger)
  );

  ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
