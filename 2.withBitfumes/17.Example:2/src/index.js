import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { combineReducers, createStore } from 'redux';

const personReducer = (state={}, { type, payload }) => {
  if(type === 'UPDATE_PERSON') {
    return { name: payload }
  } 
  return state
}

const gameReducer = (state={}, { type, payload }) => {
  if (type === 'UPDATE_GAME') {
    return { name: payload }
  }
  return state
}

const allReducers = combineReducers( { game: gameReducer, person: personReducer } )

const initialState = {
  game:   { name: 'Football'},
  person: { name: 'Karan' }
}

const store = createStore(allReducers, initialState);
console.log(store)
console.log(store.getState())

store.dispatch(
  { type: 'UPDATE_PERSON', payload: 'Harleen Kaur'}
)

store.dispatch( 
  { type: 'UPDATE_GAME', payload: 'Cricket' }
)

console.log(store.getState())


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
