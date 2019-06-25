import signUp from '../authActions';
import * as types from '../actionTypes';

describe('auth actions', () => {
  it('Should return a message', () => {
    const text = 'Success';
    const expectedAction = {
      type: types.CREATE_USER,
      message: text,
    };
    expect(signUp(text)).toEqual(expectedAction);
  });
});
