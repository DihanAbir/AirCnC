import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="row">
      <div className="col-lg-6 ">
        <div className="img border">
          <h1 className="logo">air-cnc</h1>
        </div>
      </div>
      <div className="col-lg-6 border">
        <ul>
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>Home</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
