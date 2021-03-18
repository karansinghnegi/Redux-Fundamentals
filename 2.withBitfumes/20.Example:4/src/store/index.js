import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import userRedducer from './reducers/userReducer';
import gameReducer from './reducers/gameReducer';
import personReducer from './reducers/personReducer';
import thunk from 'redux-thunk';


const allReducers = combineReducers( { game: gameReducer, person: personReducer, users: userRedducer } )

const initialState = {
  game:   { name: 'Football'},
  person: { name: 'Karan', 'email': 'nkaran1995@gmail.com' },
  users: []
}

const middleware = [thunk]
const store = createStore(allReducers, initialState, compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) );




export default store;