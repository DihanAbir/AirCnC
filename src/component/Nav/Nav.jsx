import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { cartContext } from "../../App";
import { showCart } from "../../StatesManagement/Actions/Heade.actions";

function Nav() {
  const [cart, setCart, signedIn1, setSignIn1] = useContext(cartContext);
  const signOutHandeler = () => {
    setSignIn1(null);
    console.log("clicked");
  };
  // const dispatch = useDispatch();

  // const handleDispatch = () => {
  //   dispatch(showCart);
  // };

  return (
    <div className="container ">
      <div className="row ">
        <div className="col-lg-6 ">
          <div className="img border">
            <h1>
              <Link className="logo" to="/">
                Aircnc
              </Link>
            </h1>
          </div>
        </div>
        <div className="col-lg-6 border">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Service</Link>
            </li>
            <li>
              <Link to="/">Contact </Link>
            </li>
            <li>
              {signedIn1.email ? (
                <button
                  onClick={signOutHandeler}
                  className="b-round btn-primary"
                >
                  SignOut
                </button>
              ) : (
                <Link to="/login">
                  <button className="b-round btn-primary">LogIn</button>
                </Link>
              )}
            </li>
            <li>
              {signedIn1.email ? (
                <Link to="/admin">
                  <button className="b-round btn-primary">Admin</button>
                </Link>
              ) : null}
            </li>
            {signedIn1.photoURL ? (
              <li>
                <img
                  style={{ width: "30px", borderRadius: "50%" }}
                  src={signedIn1.photoURL}
                  alt={signedIn1.email}
                />
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
