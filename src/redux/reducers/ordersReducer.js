import * as types from '../actions/actionTypes';
import initalState from './initalState';

export default function ordersReducer(state = initalState.orders, action) {
  switch (action.type) {
    case types.LOAD_ORDERS_SUCCESS:
      return action.orders;

    case types.CREATE_ORDER_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.order),
      ];

    default:
      return state;
  }
}
