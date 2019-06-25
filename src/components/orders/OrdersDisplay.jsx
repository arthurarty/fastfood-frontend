import React from 'react';
import PropTypes from 'prop-types';

const OrdersDisplay = (props) => {
  const { orders } = props;

  function ordersRow(order, index) {
    return (
      <tr key={index}>
        <td>{order[0].order_id}</td>
        <td>{order[0].menu_id}</td>
        <td>{order[0].user_id}</td>
        <td>{order[0].quantity}</td>
        <td>{order[0].status}</td>
        <td>{order[0].created_at}</td>
      </tr>
    );
  }

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Order Id</th>
            <th>Menu Id</th>
            <th>User Id</th>
            <th>Quantity</th>
            <th>Status</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(ordersRow)}
        </tbody>
      </table>
    </div>
  );
};

OrdersDisplay.propTypes = {
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      created_at: PropTypes.string,
      menu_id: PropTypes.number,
      order_id: PropTypes.number,
      quantity: PropTypes.number,
      status: PropTypes.string,
      user_id: PropTypes.number,
    }).isRequired,
  ).isRequired,
};

export default OrdersDisplay;
