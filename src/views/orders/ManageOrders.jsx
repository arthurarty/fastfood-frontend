import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as orderActions from '../../redux/actions/userActions';
import OrdersForm from '../../components/orders/OrdersForm';

class ManageOrders extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      order: Object.assign({}, props.order),
      errors: '',
    };
    this.updateOrderState = this.updateOrderState.bind(this);
    this.saveOrder = this.saveOrder.bind(this); 
  }

  updateOrderState(event) {
    const field = event.target.name;
    const order = this.state.order;
    order[field] = event.target.value;
    return this.setState({order:order});
  }

  saveOrder(event) {
    event.preventDefault();
    this.props.actions.saveOrder(this.state.order);
  }

  render() { 
    const { order, errors } = this.state;
    const { allMenu } = this.props;
    return (
      <div className="container">
        <h1>Manage Orders</h1>
        <OrdersForm
          allMenu={allMenu}
          onChange={this.updateOrderState}
          onSave={this.saveOrder}
          order={order}
          errors={errors}
        />
      </div>
    );
  }
}

ManageOrders.propTypes = {
  order: PropTypes.shape({
    created_at: PropTypes.string,
    menu_id: PropTypes.number,
    order_id: PropTypes.number,
    quantity: PropTypes.number,
    status: PropTypes.string,
    user_id: PropTypes.number,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    order: state.order,
    allMenu: state.menuItems,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(orderActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageOrders);
