import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "../utils/Date";
import BasicTextFields from "../utils/Input";
import PersonSelect from "../utils/PersonSelect";
import moment from "moment";
import { cartContext } from "../App";

function ReceiveReservationDetail() {
  const [cart, setCart] = useContext(cartContext);
  // states
  const [arrow, setArrow] = useState(true);
  const [adult, setAdult] = useState(0);
  const [baby, setBaby] = useState(0);
  const [child, setChild] = useState(0);
  const [checkIn, setCheckIn] = useState(moment(new Date()));
  const [checkOut, setCheckOut] = useState(moment(new Date()));
  const [location, setlocation] = useState(cart.singleItem[0].location);

  const [filterData, setFilterData] = useState({
    location: { location },
    checkIn: { checkIn },
    checkOut: { checkOut },
    adult: { adult },
    baby: { baby },
    child: { child },
  });

  useEffect(() => {
    setCart({ ...cart, filterData });
    setFilterData({
      location: { location },
      checkIn: { checkIn },
      checkOut: { checkOut },
      adult: { adult },
      baby: { baby },
      child: { child },
    });
  }, [location, checkIn, checkOut, adult, baby, child]);

  // functions

  const arrowHandler = () => {
    setArrow(!arrow);
  };
  return (
    <div
      className="border"
      style={{
        height: "80vh",
      }}
    >
      <p>Enter details for reservation</p>
      <div className="p-3">
        {/* date picker */}
        <DatePicker
          checkOut={checkOut}
          setCheckOut={setCheckOut}
          checkIn={checkIn}
          setCheckIn={setCheckIn}
        />
        <div className="row mt-3">
          <div className="col-10">
            Adult:{adult} Child: {child} Baby: {baby}
            <br />
            <small className="mx-auto text-danger">
              **Have one adult is mendetory!
            </small>
          </div>
          <div className="col-2">
            <button className="btn btn-danger" onClick={arrowHandler}>
              {arrow ? "^" : "v"}
            </button>
          </div>
        </div>
        {/* <PersonSelect arrow={arrow} /> */}
        {arrow ? (
          <PersonSelect
            setAdult={setAdult}
            setBaby={setBaby}
            setChild={setChild}
          />
        ) : (
          ""
        )}

        {/* Button selection using condition
         */}
        {/* {filterData.location === "" ||
        filterData.checkIn === moment(new Date()).format("YYYY-MM-DD") ||
        adult === 0 ? (
          <button style={{ width: "100%" }} className="mt-3 btn btn-danger">
            Fill inputes with the Information
          </button>
        ) : (
          <Link style={{ color: "white" }} to="/search">
            <button style={{ width: "100%" }} className="mt-3 btn btn-danger">
              Search
            </button>
          </Link>
        )} */}

        {/* Button selection using condition
         */}
      </div>
    </div>
  );
}

export default ReceiveReservationDetail;
