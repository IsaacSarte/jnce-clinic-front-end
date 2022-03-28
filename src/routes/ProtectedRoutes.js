
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
            </>
          );
        }
      }}
    />
  </div>

  );
};

export default ProtectedRoutes;
