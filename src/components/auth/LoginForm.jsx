import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const OrdersForm = ({user, onSave, onChange, loading, errors}) => {
  return (
    <form>
      <h1>Login Form</h1>
      <TextInput
        name="email"
        label="email"
        value="user."
      />
    </form>
  );
};
