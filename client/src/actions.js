export const selectPlace = (id) => ({
  type: 'SELECT_PLACE',
  id
})

// TODO: do I need this?? I have initial state of {}
export const clearSelection = () => ({
  type: 'CLEAR_SELECTION'
})