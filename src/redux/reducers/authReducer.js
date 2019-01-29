import * as types from '../actions/actionTypes';

export default function authReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_USER:
      return [...state,
        Object.assign({}, action.message),
      ];

    default:
      return state;
  }
}
