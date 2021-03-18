import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { cartContext } from "../App";

import AfterLogedin from "../utils/AfterLogedin";
import LogInWIdget from "../utils/logInWIdget";

function Login() {
  const [signedIn, setSignIn] = useState([]);
  const [cart, setCart, signedIn1, setSignIn1] = useContext(cartContext);

  useEffect(() => {
    setSignIn1(signedIn);
  }, [signedIn, signedIn1]);
  console.log("adsa");
  console.log(signedIn1);
  return (
    <div>
      <div className="main-section text-center border">
        {signedIn.length === 0 ? (
          <LogInWIdget signedIn={signedIn} setSignIn={setSignIn} />
        ) : (
          <AfterLogedin signedIn={signedIn} />
        )}
      </div>
    </div>
  );
}

export default Login;
