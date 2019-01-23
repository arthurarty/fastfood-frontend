import Axios from 'axios';
import * as types from './actionTypes';

const apiUrl = 'http://127.0.0.1:5000/v1/menu';

export function loadMenuSuccess(menuItems) {
  return { type: types.LOAD_MENU_SUCCESS, menuItems };
}

Axios.defaults.headers.common['Authorization'] = 'Bearer'+' eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDgxNTgyNzUsIm5iZiI6MTU0ODE1ODI3NSwianRpIjoiMTgxZDE2OTctZGI3ZC00ZmRlLWEyYmMtZWZkNjc2NjFkNWE1IiwiZXhwIjoxNTQ4MTU5MTc1LCJpZGVudGl0eSI6eyJ1c2VyX2lkIjoxLCJ1c2VyX3JvbGUiOnRydWV9LCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MifQ.4g5UK8i28iwuWBDp5CunDF7EIY1-_Aqr4Og5cEKebxo';

export function loadMenuItems() {
  return function(dispatch) { 
    return Axios.get(apiUrl)
      .then(
      resp => { 
       dispatch(loadMenuSuccess(resp.data));
      })
      .catch(error => {
        throw(error);
      });
  };
}
