import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'msg-notify/dist/notify.css';
import notify from 'msg-notify';
import { bindActionCreators } from 'redux';
import { signUpUserThunk } from '../redux/thunks/authThunk';
import SignUpForm from '../components/auth/SignUpForm';
import LoginForm from '../components/auth/LoginForm';

class SignUpView extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      user: Object.assign({}, props.user),
    };
    this.updateUserState = this.updateUserState.bind(this);
    this.saveUser = this.saveUser.bind(this);
  }

  componentDidUpdate(prevProps) {
    let { message } = this.props.state;
    if (message !== prevProps.state.message) {
      console.log(message[0].msg);
      notify(message[0].msg, 'info');
      message = [];
    }
  }

  updateUserState(event) {
    const field = event.target.name;
    const { user } = this.state;
    user[field] = event.target.value;
    return this.setState({ user });
  }

  saveUser(event) {
    const { user } = this.state;
    const { createUser } = this.props;
    event.preventDefault();
    createUser(user);
  }

  render() {
    const { user } = this.state;
    return (
      <div className="col-lg-4 col-md-6 col-sm-12 signup">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">SignUP</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Login</a>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            <SignUpForm
              onChange={this.updateUserState}
              onSave={this.saveUser}
              user={user}
            />
          </div>
          <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
            <LoginForm
              onChange={this.updateUserState}
              onSave={this.saveUser}
              user={user}
            />
          </div>
        </div>
      </div>
    );
  }
}

SignUpView.propTypes = {
  createUser: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    users: state.users,
    state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createUser: bindActionCreators(signUpUserThunk, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpView);
