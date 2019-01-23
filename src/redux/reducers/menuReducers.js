import * as types from '../actions/actionTypes';
import initalState from './initalState';

export default function menuReducer(state = initalState.menuItems, action) {
  switch (action.type) {
    case types.LOAD_MENU_SUCCESS:
      return action.menuItems;

    default:
      return state;
  }
}
