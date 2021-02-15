import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import personReducer from '../reducers/personReducers';
import gameReducer from '../reducers/gameReducers';
import userReducer from '../reducers/userReducers';
import thunk from 'redux-thunk';


const allReducers = combineReducers({ person: personReducer, game: gameReducer, users: userReducer })
  
const initialStates = {
    game:   { name: 'Swimming' },
    person: { name: 'Karan Singh Negi' },
    users: []
}
  
const middleWare = [thunk];

const store = createStore(allReducers, initialStates, compose(applyMiddleware(...middleWare), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;