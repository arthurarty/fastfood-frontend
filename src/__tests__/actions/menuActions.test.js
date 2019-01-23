import * as actions from '../../redux/actions/menuActions';
import * as types from '../../redux/actions/actionTypes';

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const menuItems = [
      [
        {
          description: 'fried chips',
          menu_id: 1,
          name: 'chips',
          price: 4000,
        },
      ],
    ];
    const expectedAction = {
      type: types.LOAD_MENU_SUCCESS,
      menuItems,
    };
    expect(actions.loadMenuSuccess(menuItems)).toEqual(expectedAction);
  });
});
