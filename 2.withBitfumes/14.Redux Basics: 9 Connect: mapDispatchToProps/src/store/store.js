import { createStore, combineReducers } from 'redux';
import personReducer from '../reducers/personReducers';
import gameReducer from '../reducers/gameReducers';

const allReducers = combineReducers({ person: personReducer, game: gameReducer })
  
const initialStates = {
    game:   { name: 'Swimming' },
    person: { name: 'Karan Singh Negi' }
}
  
const store = createStore(allReducers, initialStates,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;