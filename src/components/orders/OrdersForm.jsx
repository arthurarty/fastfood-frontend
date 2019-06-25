import React from 'react';
import PropTypes from 'prop-types';
import NumberInput from '../common/NumberInput';

const OrdersForm = ({ order, allMenu, onSave, onChange, loading, errors }) => {
  return (
    <form>
      <h1>Orders form</h1>
      <NumberInput
        name="menu_item"
        label="menu_item"
        value={order.menu_id}
        options={allMenu}
        onChange={onChange}
        error={errors}
      />
      <NumberInput
        name="quantity"
        label="quantity"
        value={order.quantity}
        onChange={onChange}
        error={errors}
      />
      <input
        type="submit"
        disabled={loading}
        value={loading ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}
      />
    </form>
  );
};

OrdersForm.defaultProps = {
  loading: false,
};

OrdersForm.propTypes = {
  order: PropTypes.shape({
    created_at: PropTypes.string,
    menu_id: PropTypes.number,
    order_id: PropTypes.number,
    quantity: PropTypes.number,
    status: PropTypes.string,
    user_id: PropTypes.number,
  }).isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

export default OrdersForm;
