import { UPDATE_USER } from '../actions/userActions';

// Here we are destructuring an object in the parameters

const userReducer = (state = {}, { type, payload }) => {

  switch (type) {
    case UPDATE_USER:
      
      return payload;
  
    default:
      return state;
  }

}



export default userReducer;