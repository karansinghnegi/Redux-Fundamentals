// Here we are destructuring an object in the parameters

const personReducer = (state = {}, { type, payload }) => {

    if (type === 'UPDATE_PERSON') {
      return { name: payload }
    }
  
    return state;
  
}



export default personReducer;