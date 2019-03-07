import { combineReducers } from 'redux';
import itemReducer from './item-reducer';
import selectedItemRducer from './selected-item-reducer';

const rootReducer = combineReducers({
  itemList: itemReducer,
  selectedItem: selectedItemRducer
});

export default rootReducer
