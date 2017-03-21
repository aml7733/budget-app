const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return state.concat(action.payload);
    case 'DELETE_ITEM':
      return state.filter(item => item.id !== action.id);
      break;
    default:
      return state;
  }
}

export default itemsReducer;
