import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';

let reducer = (state, actions) => {

  if (actions.type === 'UPDATE_NAME') {
    return { name: actions.payload }
  }

  return { name: 'Karan Singh Negi' }

}

let store = createStore( reducer );

console.log(store);
console.log('Current State of the Store is : ')
console.log(store.getState());

// Let's change the state of the store using actions

store.dispatch( { type: 'UPDATE_NAME', payload: 'Abu the Millionaire' } );
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
