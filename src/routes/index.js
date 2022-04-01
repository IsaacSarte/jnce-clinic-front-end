import React from 'react';

// React Router
import { Route, Switch, withRouter } from "react-router-dom";

// Pages
import Landing from '../pages/Landing';

// Components
import AuthRoutes from './AuthRoutes';
import ProtectedRoutes from './ProtectedRoutes';

import SignIn from '../components/Admin/Auth/SignIn.jsx';

/* Admin Routes */
import Dashboard from '../components/Admin/Dashboard/Dashboard.jsx';
import CreateAdmin from '../components/Admin/CreateAdmin/CreateAdmin.jsx';
import UpdateAdmin from '../components/Admin/UpdateAdmin/UpdateAdmin.jsx';
import ViewFeedbacks from '../components/Admin/ViewFeedbacks/ViewFeedbacks';
import ViewPatients from '../components/Admin/ViewPatients/ViewPatients';
import ViewAppointments from '../components/Admin/ViewAppointments/ViewAppointments';
import ShowFeedback from '../components/Admin/ViewFeedbacks/ShowFeedback';


/* User Routes */

const routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Landing} />
            {/* Admin Routes */}
            <ProtectedRoutes path="/admin-signin" exact component={SignIn} />
            <AuthRoutes path="/admin-dashboard" exact component={Dashboard} />
            <AuthRoutes path="/create-admin" exact component={CreateAdmin} />
            <AuthRoutes path="/update-admin" exact component={UpdateAdmin} />
            <AuthRoutes path="/view-patients" exact component={ViewPatients} />
            <AuthRoutes path="/view-appointments" exact component={ViewAppointments} />
            <AuthRoutes path="/view-feedbacks" exact component={ViewFeedbacks} />
            <AuthRoutes path="/show-feedback" exact component={ShowFeedback} />
        </Switch>
    )
}

export default withRouter(routes);
