import React from "react";
import Filter from "../component/Filter";
import Nav from "../component/Nav";
import Product from "../component/services/Product";

function Landing() {
  return (
    <>
      <div className="container">
        <Nav />
        <div className="row mt-5">
          <div className="col-lg-5">
            <Filter />
          </div>
          <div className="col-lg-7">
            <Product />
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
