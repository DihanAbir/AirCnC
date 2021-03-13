import React from "react";
import Steppers from "../utils/Stepper";

function CheckOut() {
  return (
    <div className="container">
      <p>check out page</p>
      <div className="row">
        <div className="col-lg-6 border">
          <Steppers />
        </div>
        <div className="col-lg-6"></div>
      </div>
    </div>
  );
}

export default CheckOut;
