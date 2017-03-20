export function manageItems(state = [], action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return state.concat(action.payload);

    case 'CLEAR_ITEMS':

      break;
    default:
      return state;
  }
}
