import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import { cartContext } from "../../App";

function PrivateRoute({ children, ...rest }) {
  const [cart, setCart, signedIn1, setSignIn1] = useContext(cartContext);
  console.log(signedIn1.email);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        signedIn1.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
