import React, { useContext, useEffect, useState } from "react";
import {
  Navbar,
  Nav,
  Button,
  NavDropdown,
  FormControl,
  Form,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { cartContext } from "../../App";
import { showCart } from "../../StatesManagement/Actions/Heade.actions";

function NavCUstome() {
  const [cart, setCart, signedIn1, setSignIn1] = useContext(cartContext);
  const [nav, setNav] = useState("Home");

  const signOutHandeler = () => {
    setSignIn1(null);
  };

  // const dispatch = useDispatch();

  // const handleDispatch = () => {
  //   dispatch(showCart);
  // };
  useEffect(() => {
    console.log(`nav`, nav);
  }, [nav]);

  return (
    <div className="container">
      <Navbar expand="lg">
        <Navbar.Brand href="#home">
          <h1>
            <Link className="logo" to="/">
              Aircnc
            </Link>
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto ">
            <Nav.Link>
              <Link
                onClick={() => setNav("Home")}
                className={`${nav === "Home" ? "activeNav" : ""}`}
                to="/"
              >
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                className={`${nav === "Service" ? "activeNav" : ""}`}
                onClick={() => setNav("Service")}
                to="/"
              >
                Service
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                className={`${nav === "Contact" ? "activeNav" : ""}`}
                onClick={() => setNav("Contact")}
                to="/"
              >
                Contact{" "}
              </Link>
            </Nav.Link>
            <Nav.Link>
              {signedIn1.email ? (
                <NavDropdown
                  className=""
                  title={signedIn1.displayName}
                  id="basic-nav-dropdown"
                >
                  <p onClick={signOutHandeler} className=" btn-primary">
                    SignOut
                  </p>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">
                    Profile
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Link to="/login">
                  <p className="b-round btn-primary">LogIn</p>
                </Link>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavCUstome;

// //<div className="container ">
// <div className="row ">
// <div className="col-lg-6 ">
//   <div className="img border">
//   <h1>
//     <Link className="logo" to="/">
//       Aircnc
//     </Link>
//   </h1>
// </div>
// </div>
// <div className="col-lg-6 border">
//   <ul>
//     <li>
//       <Link to="/">Home</Link>
//     </li>
//     <li>
//       <Link to="/">Service</Link>
//     </li>
//     <li>
//       <Link to="/">Contact </Link>
//     </li>
//     <li>
//       {signedIn1.email ? (
//         <button
//           onClick={signOutHandeler}
//           className="b-round btn-primary"
//         >
//           SignOut
//         </button>
//       ) : (
//         <Link to="/login">
//           <button className="b-round btn-primary">LogIn</button>
//         </Link>
//       )}
//     </li>
//     <li>
//       {signedIn1.email ? (
//         <Link to="/admin">
//           <button className="b-round btn-primary">Admin</button>
//         </Link>
//       ) : null}
//     </li>
//     {signedIn1.photoURL ? (
//       <li>
//         <img
//           style={{ width: "30px", borderRadius: "50%" }}
//           src={signedIn1.photoURL}
//           alt={signedIn1.email}
//         />
//       </li>
//     ) : (
//       ""
//     )}
//   </ul>
// </div>
// </div>
// </div>*/
