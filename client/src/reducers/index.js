import { combineReducers } from 'redux';
import itemsReducer from './itemsReducer';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
  items: itemsReducer,
  modal: modalReducer
})

export default rootReducer;
