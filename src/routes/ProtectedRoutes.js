
import React from "react";
import { Route, Redirect } from "react-router-dom";
import AdminAuthAPI from "../services/AdminAuthAPI";

const ProtectedRoutes = ({ component: Component, ...rest }) => {
  return (
  <div>
    <Route
      {...rest}
      render={(props) => {
        if (!AdminAuthAPI.isAuthenticated()) {
          return <Component {...props} />;
        } else {
          return (
            <>
              {/* Admin Routes */}
              <Redirect
                to={{
                  pathname: "/admin-dashboard",
                  state: {
                    from: props.location,
                  },
                }}
              />
              <Redirect
                to={{
                  pathname: "/create-admin",
                  state: {
                    from: props.location,
                  },
                }}
              />
              <Redirect
                to={{
                  pathname: "/update-admin",
                  state: {
                    from: props.location,
                  },
                }}
              />
              <Redirect
                to={{
                  pathname: "/view-patients",
                  state: {
                    from: props.location,
                  },
                }}
              />
              <Redirect
                to={{
                  pathname: "/view-appointments",
                  state: {
                    from: props.location,
                  },
                }}
              />
              <Redirect
                to={{
                  pathname: "/view-feedbacks",
                  state: {
                    from: props.location,
                  },
                }}
              />
            </>
          );
        }
      }}
    />
  </div>

  );
};

export default ProtectedRoutes;
