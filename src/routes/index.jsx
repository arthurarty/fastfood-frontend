import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import LoginView from '../views/LoginView';
import SignUpView from '../views/SignUpView';
import configureStore from '../redux/store/configureStore';

const store = configureStore();

const Routes = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={LoginView} />
        <Route path="/signup" component={SignUpView} />
      </Switch>
    </Router>
  </Provider>
);

export default Routes;
