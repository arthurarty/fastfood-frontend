import Axios from 'axios';
import * as types from './actionTypes';

const apiUrl = 'http://127.0.0.1:5000/v1/orders';

export function createOrderSuccess(order) {
  return { type: types.CREATE_ORDER_SUCCESS, order };
}

export function loadOrdersSuccess(orders) {
  return { type: types.LOAD_ORDERS_SUCCESS, orders };
}
Axios.defaults.headers.common['Authorization'] = 'Bearer'+' eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDgxNTgyNzUsIm5iZiI6MTU0ODE1ODI3NSwianRpIjoiMTgxZDE2OTctZGI3ZC00ZmRlLWEyYmMtZWZkNjc2NjFkNWE1IiwiZXhwIjoxNTQ4MTU5MTc1LCJpZGVudGl0eSI6eyJ1c2VyX2lkIjoxLCJ1c2VyX3JvbGUiOnRydWV9LCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MifQ.4g5UK8i28iwuWBDp5CunDF7EIY1-_Aqr4Og5cEKebxo';
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
const jwt = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NDgxNTgyNzUsIm5iZiI6MTU0ODE1ODI3NSwianRpIjoiMTgxZDE2OTctZGI3ZC00ZmRlLWEyYmMtZWZkNjc2NjFkNWE1IiwiZXhwIjoxNTQ4MTU5MTc1LCJpZGVudGl0eSI6eyJ1c2VyX2lkIjoxLCJ1c2VyX3JvbGUiOnRydWV9LCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MifQ.4g5UK8i28iwuWBDp5CunDF7EIY1-_Aqr4Og5cEKebxo';
export function loadOrders() {
  return function(dispatch) {
    return Axios.get(apiUrl)
      .then(
      resp => { 
        dispatch(loadOrdersSuccess(resp.data));
      })
      .catch(error => {
        throw(error);
      });
  };
}

export function saveOrder(order) {
  return function (dispatch) {
    const orderData = {
      menu_item: order.menu_item,
      quantity: order.quantity,
    };
    console.log(orderData);
    return fetch('http://127.0.0.1:5000/v1/users/orders', {
      method: 'POST',
      mode: 'cors',
      headers: { 
          'Content-Type': 'application/json',
          'Authorization':`Bearer ${jwt}`
       },
      body: JSON.stringify({menu_id: Number(order.menu_item), quantity: Number(order.quantity) })
  }).then((res) => res.json())
      .then((response) => dispatch(createOrderSuccess(response)))
      .catch((err) => console.log(err)) 
  };
}
