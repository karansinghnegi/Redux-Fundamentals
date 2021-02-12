import { createStore, combineReducers } from "redux";
import gameReducer from '../reducers/gameReducer';
import personReducer from '../reducers/personReducer';

const allReducers = combineReducers( { game: gameReducer, person: personReducer } );

const initalState = {
    game:   { name: 'Footbal' },
    person: { name: 'Negi'}
}

const store = createStore(allReducers, initalState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;