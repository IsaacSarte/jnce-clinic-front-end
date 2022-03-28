import React from "react";
import { Route, Redirect } from "react-router-dom";
import AdminAuthAPI from "../services/AdminAuthAPI";

const AuthRoutes = ({ component: Component, ...rest }) => {
  return (
    <>
      {/* {AuthAPI.isAuthenticated() && {Dashboard}} */}
      <Route
        {...rest}
        render={(props) => {
          if (AdminAuthAPI.isAuthenticated()) {
            return <Component {...props} />;
          } else {
            return (
              <Redirect
                to={{
                  pathname: "/admin-signin",
                  state: {
                    from: props.location,
                  },
                }}
              />
            );
          }
        }}
      />
    </>
  );
};

export default AuthRoutes;
