import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import OrdersDisplay from '../../components/orders/OrdersDisplay';

const SignUpPage = (props) => {
  const { orders } = props;
  return (
    <div>
      <h1>Orders</h1>
      <OrdersDisplay orders={orders} />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    orders: state.orders,
  };
}

SignUpPage.defaultProps = {
  orders: [],
};

SignUpPage.propTypes = {
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      created_at: PropTypes.string,
      menu_id: PropTypes.number,
      order_id: PropTypes.number,
      quantity: PropTypes.number,
      status: PropTypes.string,
      user_id: PropTypes.number,
    }).isRequired,
  ),
};

export default connect(mapStateToProps)(SignUpPage);
