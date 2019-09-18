import { combineReducers } from 'redux';

const selectedPlace = (state = {}, action) => {
  switch (action.type) {
    case 'SELECT_PLACE': 
      return { id : action.id }; // the id of the selected place 
    default:
      return state;
  }
}

// const clearedSelection = (state = {}, action) => {
//   switch (action.type) {
//     case 'CLEAR_SELECTION':
//       return { id }; // the id of the selected place 
//     default:
//       return state;
//   }
// }

// Combining both reducers
const reducers = combineReducers({
  selectedPlace,
  // clearedSelection,
});

export default reducers;
