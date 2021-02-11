import store from './functional/store';
import * as actions from './functional/actionTypes';

console.log(store);
console.log(store.getState());

// Subscribing to the store, called eveytime when the state change in a store
// The subscribe method returns an function

const unsubscibe = store.subscribe(() => {
    console.log("Store Changed", store.getState())
})

// Dispatching action to the store
store.dispatch({
    type: actions.BUG_ADDED,
    payload: {
        description: "Bug"
    }
})

// Getting the current state of the store
console.log(store.getState())

// Dispatching another action to the store
store.dispatch({
    type: actions.BUG_REMOVED,
    payload: {
        id: 1,
    }
});

// Getting the current state of the store
console.log(store.getState())

unsubscibe();