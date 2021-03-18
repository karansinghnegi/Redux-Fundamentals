import { combineReducers, createStore } from 'redux';

import gameReducer from './reducers/gameReducer';
import personReducer from './reducers/personReducer';


const allReducers = combineReducers( { game: gameReducer, person: personReducer } )

const initialState = {
  game:   { name: 'Football'},
  person: { name: 'Karan' }
}

const store = createStore(allReducers, initialState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());




export default store;