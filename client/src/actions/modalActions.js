export function showModal() {
  return (dispatch) => {
    dispatch({ type: 'SHOW_MODAL' })
  }
}

export function hideModal() {
  return (dispatch) => {
    dispatch({ type: 'HIDE_MODAL' })
  }
}
