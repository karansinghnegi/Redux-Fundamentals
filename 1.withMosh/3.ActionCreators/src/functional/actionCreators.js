
import * as actions from './actionTypes';

export function bugAdded(description) {
    return {
        type: actions.BUG_ADDED,
        payload: {
            description
        }
    };
}

export const bugRemoved = description => ({
    type: actions.BUG_REMOVED,
    payload: {
        id: 1,
    }
})

export const bugResolved = id => ({
    type: actions.BUG_RESOLVEED,
    payload: {
        id,
    }
})

/** Alternatively you can do is : 
 * 
 *  export const bugAdded = description => ({
 *           type: actions.BUG_ADDED,
                payload: {
                    description: "Bug"
                 }
 *  
 *             })
 * 
 */