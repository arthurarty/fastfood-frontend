import reducer from '../authReducer';
import * as types from '../../actions/actionTypes';

describe('auth reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('should create user', () => {
    expect(
      reducer([], {
        type: types.CREATE_USER,
        message: ['Run the tests'],
      }),
    ).toEqual([
      {
        0: 'Run the tests',
      },
    ]);
  });
});
