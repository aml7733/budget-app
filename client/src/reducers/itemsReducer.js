const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return state.concat(action.payload);
    case 'DELETE_ITEM':
      debugger
      return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
}

export default itemsReducer;
