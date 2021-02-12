import store from './functional/store';
import { bugAdded, bugRemoved, bugResolved } from './functional/actionCreators';

console.log(store);
console.log(store.getState());

// Subscribing to the store, called eveytime when the state change in a store
// The subscribe method returns an function

const unsubscibe = store.subscribe(() => {
    console.log("Store Changed", store.getState())
})

// Dispatching action to the store
store.dispatch(bugAdded("Bug 1"))

// Getting the current state of the store
console.log(store.getState())

// Dispatching another action to the store
store.dispatch(bugRemoved('Bug 1 Removed'));

// Getting the current state of the store
console.log(store.getState())

store.dispatch(bugResolved(1))
unsubscibe();