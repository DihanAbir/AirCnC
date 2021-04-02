import React, { useContext, useEffect } from "react";
// firebase
import firebase from "firebase/app";
import "firebase/auth";

import firebaseConfig from "../Auth/firebase.config";
import { useHistory, useLocation } from "react-router";
import { cartContext } from "../App";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

function LoginLogic({ setSignIn, signedIn }) {
  const [cart, setCart, signedIn1, setSignIn1] = useContext(cartContext);
  //   const [signedIn, setSignIn] = useState([]);
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const provider = new firebase.auth.GoogleAuthProvider();

  const handelSignin = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        var credential = result.credential;

        var token = credential.accessToken;
        var { displayName, photoURL, email } = result.user;
        setSignIn({ ...signedIn, displayName, photoURL, email });
        storeAuth();
        history.replace(from);

        // console.log(photoURL);
        // console.log(email);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
      });
  };

  const storeAuth = () => {
    firebase
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        // console.log(idToken);
        sessionStorage.setItem("token", idToken);
      })
      .catch(function (error) {});
  };

  useEffect(() => {
    // autoState();
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
