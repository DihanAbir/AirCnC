import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { showCart } from "../../StatesManagement/Actions/Heade.actions";

function Nav() {
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
              <Link style={{ color: "forestgreen", fontWeight: "bold" }} to="/">
                air-cnc
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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
