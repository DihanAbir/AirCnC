import React, { useContext } from "react";
import { cartContext } from "../App";
import Steppers from "../utils/Stepper";

function CheckOut() {
  const [cart, setCart, signedIn1, setSignIn1] = useContext(cartContext);
  console.log(cart);
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 pt-5 mt-5">
          <Steppers cart={cart} signedIn1={signedIn1} />
        </div>
        <div className="col-lg-4 pt-5 offset-lg-1">
          <div className="row">
            <div className="col-8">
              {cart.singleItem ? <b>{cart.singleItem[0].title}</b> : ""}
              <br />
              <p>Review: {cart.singleItem ? cart.singleItem[0].review : ""}</p>
              <small>
                Review: {cart.singleItem ? cart.singleItem[0].location : ""}
              </small>
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
