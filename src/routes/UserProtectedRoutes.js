
import React from "react";
import { Route, Redirect } from "react-router-dom";
import UserAuthAPI from "../services/UserAuthAPI";

const ProtectedRoutes = ({ component: Component, ...rest }) => {
  return (
  <div>
    <Route
      {...rest}
      render={(props) => {
        if (!UserAuthAPI.isAuthenticated()) {
          return <Component {...props} />;
        } else {
          return (
            <>
              {/* User Routes */}
              <Redirect
                to={{
                  pathname: "/create-event",
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
