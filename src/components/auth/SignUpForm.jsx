import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';
import PasswordInput from '../common/PasswordInput';
import NumberInput from '../common/NumberInput';

const SignUpForm = ({
  user, onSave, onChange, loading,
}) => {
  return (
    <div id="signUpForm" className="col-lg-12 col-md-12 col-sm-12">
      <form>
        <h1 className="text-center">Sign Up</h1>
        <TextInput
          name="email"
          label="Email"
          value={user.email}
          onChange={onChange}
        />
        <TextInput
          name="name"
          label="Name"
          value={user.name}
          onChange={onChange}
        />
        <PasswordInput
          name="password"
          label="Password"
          value={user.password}
          onChange={onChange}
        />
        <NumberInput
          name="role"
          label="Role"
          value={user.role}
          onChange={onChange}
        />
        <input
          type="submit"
          disabled={loading}
          value="Sign UP"
          className="btn btn-primary btn-block"
          onClick={onSave}
        />
      </form>
    </div>
  );
};

SignUpForm.defaultProps = {
  loading: false,
};

SignUpForm.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
  }).isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};


export default SignUpForm;
