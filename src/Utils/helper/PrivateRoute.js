import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ChefComp, ...rest }) => {
  const userData = useSelector((state) => state.userReducer.userData);

  const isLogin = userData.name !== "" && userData.name !== null;
  const isChef = userData.isChef;
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin ? (
          isChef ? (
            <ChefComp {...props} />
          ) : (
            <Component {...props} />
          )
        ) : (
          <Redirect to="/signin" />
        )
      }
    />
  );
};
export default PrivateRoute;
