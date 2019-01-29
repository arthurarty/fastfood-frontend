import * as types from './actionTypes';

export default function signUp(message) {
  return { type: types.CREATE_USER, message };
}
