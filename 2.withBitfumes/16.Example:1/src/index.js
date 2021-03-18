import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore } from 'redux';

const reducer = (state, { type, payload }) => {
  if(type === 'UPDATE_NAME') {
    return { name: payload }
  } 
  return { name: 'Karan Negi' }
}

const store = createStore(reducer);
console.log(store)
console.log(store.getState())

store.dispatch(
  { type: 'UPDATE_NAME', payload: 'Harleen Kaur'}
)

console.log(store.getState())


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
