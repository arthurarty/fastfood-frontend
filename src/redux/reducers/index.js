import { combineReducers } from 'redux';
import message from './authReducer';
import orders from './ordersReducer';
import menuItems from './menuReducers';

const rootReducer = combineReducers({
  message, orders, menuItems,
});

export default rootReducer;
