import {applyMiddleware, combineReducers, createStore} from 'redux'
import personReducer from './reducers/personReducer'
import gameReducer from './reducers/gameReducer'
import userReducer from './reducers/userReducer'
import thunk from 'redux-thunk'


const AllReducers = combineReducers({
   game: gameReducer,                                                    
   person :personReducer,
   users: userReducer
})

const InitialStates = {
   game: { name: 'Running' },
   person: { name: 'Karan Singh Negi' },
   users: []
}

const middleware = [thunk];
const store = createStore(AllReducers, InitialStates, applyMiddleware(...middleware));


export default store;