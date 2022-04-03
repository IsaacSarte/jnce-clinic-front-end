import React from "react";
import { Route, Redirect } from "react-router-dom";
import UserAuthAPI from "../services/UserAuthAPI";

const AuthRoutes = ({ component: Component, ...rest }) => {
  return (
    <>
      {/* {AuthAPI.isAuthenticated() && {Dashboard}} */}
      <Route
        {...rest}
        render={(props) => {
          if (UserAuthAPI.isAuthenticated()) {
            return <Component {...props} />;
          } else {
            return (
              <>
                <Redirect
                  to={{
                    pathname: "/",
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
    </>
  );
};

export default AuthRoutes;
