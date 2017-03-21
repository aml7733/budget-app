import fetch from 'isomorphic-fetch';

export function addItem(item) {
  let data = new FormData();
  data.append('json', JSON.stringify(item));

  return (dispatch) => {
    return fetch('/items', {
      method: 'POST',
      body: data
    }).then(response => {
      console.log(response);
      response.json();
    }).then(itemJSON => {
      if (itemJSON) {
        dispatch({ type: 'ADD_ITEM', payload: itemJSON });
      }
      });
  }
}

export function deleteItem(itemId) {
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
