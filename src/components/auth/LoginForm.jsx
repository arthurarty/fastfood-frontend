import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';
import PasswordInput from '../common/PasswordInput';

const LoginForm = ({
  user, onSave, onChange, loading,
}) => {
  return (
    <div className="col-lg-12 col-md-12 col-sm-12">
      <form>
        <h1 className="text-center">Sign Up</h1>
        <TextInput
          name="email"
          label="email"
          value={user.email}
          onChange={onChange}
        />
        <PasswordInput
          name="password"
          label="password"
          value={user.password}
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

LoginForm.defaultProps = {
  loading: false,
};

LoginForm.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
  }).isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};


export default LoginForm;
