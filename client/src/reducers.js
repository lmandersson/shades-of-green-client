// import { combineReducers } from 'redux';

const selectedPlace = (state = {}, action) => {
  switch (action.type) {
    case 'SELECT_PLACE': 
      return { id : action.id }; // the id of the selected place 
    default:
      return state;
  }
}


// const reducers = combineReducers({
//   selectedPlace,
//   // clearedSelection,
// });

// export default reducers;
export default selectedPlace;
