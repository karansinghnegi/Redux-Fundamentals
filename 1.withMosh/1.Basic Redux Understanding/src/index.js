import store from './functional/store';

console.log(store);
console.log(store.getState());

// Subscribing to the store, called eveytime when the state change in a store
// The subscribe method returns an function

const unsubscibe = store.subscribe(() => {
    console.log("Store Changed", store.getState())
})

// Dispatching action to the store
store.dispatch({
    type: "bugAdded",
    payload: {
        description: "Bug"
    }
})

// Getting the current state of the store
console.log(store.getState())

// Dispatching another action to the store
store.dispatch({
    type: "bugRemoved",
    payload: {
        id: 1,
    }
});

// Getting the current state of the store
console.log(store.getState())

unsubscibe();