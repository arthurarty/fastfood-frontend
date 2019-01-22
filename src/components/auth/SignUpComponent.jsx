import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import signUp from '../../redux/actions/userActions';

class SignUpPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      user: { username: ' ' },
    };

    this.onClickSave = this.onClickSave.bind(this);
    this.onUserNameChange = this.onUserNameChange.bind(this);
  }

  onUserNameChange(event) {
    const { user } = this.state;
    user.username = event.target.value;
    this.setState({ user });
  }

  onClickSave() {
    const { user } = this.state;
    this.props.createUser(user);
  }

  userRow(user, index) {
    return <div key={index}>{user.username}</div>;
  }

  render() {
    const { user } = this.state;
    const { users } = this.props;
    return (
      <div>
        <h1>Sign Up form</h1>
        {users.map(this.userRow)}
        <input
          type="text"
          placeholder="username"
          className="input-control"
          onChange={this.onUserNameChange}
          value={user.username}
        />
        <input
          type="submit"
          value="save"
          className="btn btn-primary"
          onClick={this.onClickSave}
        />
      </div>
    );
  }
}

SignUpPage.propTypes = {
  createUser: PropTypes.func.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    users: state.users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createUser: bindActionCreators(signUp, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
