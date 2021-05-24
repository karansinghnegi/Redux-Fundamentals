import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer from './store/reducer';
import createSagaMiddleware  from 'redux-saga'
import { watchAgeUp } from './sagas/saga.js'

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchAgeUp)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

