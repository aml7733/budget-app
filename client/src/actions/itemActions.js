import fetch from 'isomorphic-fetch';

export function addItem(item) {
  return { type: "ADD_ITEM", payload: item }
}

export function deleteItem(itemId) {
  debugger
  return (dispatch) => {
    return fetch(`/items/${itemId}`, { method: 'DELETE' }).then(dispatch({ type: "DELETE_ITEM", id: itemId }))
  }
}

export function fetchItems() {
  return (dispatch) => {
    return fetch('/items').then(response => response.json()).then(itemsJSON =>
      dispatch({ type: "ADD_ITEM", payload: itemsJSON }))
  }
}

export function clearItems() {
  return (dispatch) => {
    return fetch('/items/clear').then(alert("All items cleared."))
  }
}
