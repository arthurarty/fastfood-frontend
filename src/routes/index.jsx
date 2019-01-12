import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LoginView from '../views/LoginView';

const Routes = () => {
    return (
        <Router>
            <Switch>
              <Route exact  path="/" component={LoginView}/>
            </Switch>
        </Router>
    )
}

export default Routes;