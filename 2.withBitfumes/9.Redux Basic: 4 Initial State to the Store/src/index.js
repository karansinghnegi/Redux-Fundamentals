import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, combineReducers } from 'redux';

// Here we are destructuring an object in the parameters
const personReducer = (state = {}, { type, payload }) => {

  if (type === 'UPDATE_PERSON') {
    return { name: payload }
  }

  return state;

}

const gameReducer = (state = {}, { type, payload }) => {

  if (type === 'UPDATE_GAME') {
    return { name: payload }
  }

  return state;

}

// For multiple reducers states
const allReducers = combineReducers({ person: personReducer, game: gameReducer })

// Let's give initial states to our store
const initialStates = {
  game:   { name: 'Swimming' },
  person: { name: 'Karan Singh Negi' }
}

const store = createStore( allReducers, initialStates );

console.log(store);
console.log('Current State of the Store is : ')
console.log(store.getState());

// Let's change the state of the store using actions

store.dispatch( { type: 'UPDATE_PERSON', payload: 'Abu the Millionaire' } );
console.log('Updated State:')
console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
