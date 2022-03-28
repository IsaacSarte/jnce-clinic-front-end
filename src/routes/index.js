import React from 'react';

// React Router
import { Route, Switch, withRouter } from "react-router-dom";

// Pages
import Landing from '../pages/Landing';

// Components

import AuthRoutes from './AuthRoutes';
import ProtectedRoutes from './ProtectedRoutes';

import SignIn from '../components/Admin/Auth/SignIn.jsx';
import Dashboard from '../components/Admin/Dashboard/Dashboard.jsx';


const routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Landing} />
            <ProtectedRoutes path="/admin-signin" exact component={SignIn} />
            <AuthRoutes path="/admin-dashboard" exact component={Dashboard} />
        </Switch>
    )
}

export default withRouter(routes);
