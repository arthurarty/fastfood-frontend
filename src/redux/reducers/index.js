import { combineReducers } from 'redux';
import users from './userReducer';
import orders from './ordersReducer';
import menuItems from './menuReducers';

const rootReducer = combineReducers({
  users, orders, menuItems,
});

export default rootReducer;
