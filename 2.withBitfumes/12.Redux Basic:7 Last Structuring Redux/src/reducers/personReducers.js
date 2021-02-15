import { UPDATE_PERSON } from '../actions/personActions';

// Here we are destructuring an object in the parameters

const personReducer = (state = {}, { type, payload }) => {

  switch (type) {
    case UPDATE_PERSON:
      
      return { name: payload }
  
    default:
      return state;
  }

}



export default personReducer;