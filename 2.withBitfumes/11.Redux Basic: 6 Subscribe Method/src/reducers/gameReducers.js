 
const gameReducer = (state = {}, { type, payload }) => {
  
    if (type === 'UPDATE_GAME') {
      return { name: payload }
    }
  
    return state;
  
}

export default gameReducer;