import * as types from './actionTypes';

export default function signUp(user) {
  return { type: types.CREATE_USER, user };
}
