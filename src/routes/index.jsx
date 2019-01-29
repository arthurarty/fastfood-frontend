import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import SignUpView from '../views/SignUpView';
import OrdersView from '../views/orders/OrdersView';
import ManageOrders from '../views/orders/ManageOrders';
import configureStore from '../redux/store/configureStore';
import { loadOrders } from '../redux/actions/userActions';
import { loadMenuItems } from '../redux/actions/menuActions';

const store = configureStore();
store.dispatch(loadOrders());
store.dispatch(loadMenuItems());

const Routes = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={SignUpView} />
        <Route path="/signup" component={SignUpView} />
        <Route path="/order" component={ManageOrders} />
        <Route path="/order/:id" component={ManageOrders} />
        <Route path="/orders" component={OrdersView} />
      </Switch>
    </Router>
  </Provider>
);

export default Routes;
