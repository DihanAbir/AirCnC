import React from "react";
import Filter from "../component/Filter";
import Exprence from "../component/services/Exprence";
import Home from "../component/services/Home";

function Landing() {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-4">
            <Filter />
          </div>
          <div className="col-lg-8">
            <Exprence />
            <Home />
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
