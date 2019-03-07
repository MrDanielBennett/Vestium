import { combineReducers } from 'redux';
import itemReducer from './item-reducer';

const rootReducer = combineReducers({
  itemList: itemReducer
});

export default rootReducer
