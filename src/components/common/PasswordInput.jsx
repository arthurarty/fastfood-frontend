import React from 'react';
import PropTypes from 'prop-types';

const PasswordInput = ({
  name, label, onChange, placeHolder, value,
}) => {
  const wrapperClass = 'form_group';
  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
          type="password"
          name={name}
          className="form-control"
          placeholder={placeHolder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

PasswordInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeHolder: PropTypes.string,
  value: PropTypes.string,
};

export default PasswordInput;
