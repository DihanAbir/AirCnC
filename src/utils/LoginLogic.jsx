import React, { useContext, useEffect } from "react";
// firebase
import firebase from "firebase/app";
import "firebase/auth";

import firebaseConfig from "../Auth/firebase.config";
import { useHistory, useLocation } from "react-router";
import { cartContext } from "../App";

firebase.initializeApp(firebaseConfig);

function LoginLogic({ setSignIn, signedIn }) {
  const [cart, setCart, signedIn1, setSignIn1] = useContext(cartContext);
  //   const [signedIn, setSignIn] = useState([]);
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const provider = new firebase.auth.GoogleAuthProvider();

  const autoState = () => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        var { displayName, photoURL, email } = user;
        console.log(user);
        setSignIn1({ ...signedIn1, displayName, photoURL, email });
      } else {
        // No user is signed in.
      }
    });
  };

  const handelSignin = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        var credential = result.credential;

        var token = credential.accessToken;
        var { displayName, photoURL, email } = result.user;
        setSignIn({ ...signedIn, displayName, photoURL, email });
        history.replace(from);

        console.log(photoURL);
        console.log(email);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
      });
  };

  useEffect(() => {
    autoState();
  }, [signedIn1]);

  console.log(signedIn);
  return (
    <div>
      <button onClick={handelSignin} className="btn btn-primary">
        sign in with google{" "}
      </button>
    </div>
  );
}

export default LoginLogic;
