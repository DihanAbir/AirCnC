import React, { useContext } from "react";
import { cartContext } from "../App";
import Steppers from "../utils/Stepper";

function CheckOut() {
  const [cart, setCart] = useContext(cartContext);
  console.log(cart);
  return (
    <div className="container">
      <p>check out page</p>
      <div className="row">
        <div className="col-lg-6 border">
          <Steppers />
        </div>
        <div className="col-lg-4 offset-lg-1">
          <div className="row">
            <div className="col-8">
              <b>{cart.singleItem[0].title}</b>
              <br />
              <small>Review: {cart.singleItem[0].review}</small>
            </div>
            <div className="col-4">
              <img
                style={{ borderRadius: "10px" }}
                className="img-fluid"
                src={cart.singleItem[0].image}
                alt={cart.singleItem[0].title}
              />
            </div>
          </div>
          <small>Dates</small>
          <div className="border">
            {/* <span>{cart.filterData.checkIn}</span> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
