import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "../utils/Date";
import BasicTextFields from "../utils/Input";
import PersonSelect from "../utils/PersonSelect";
import moment from "moment";
import { cartContext } from "../App";

function ReserveDetails({ singleItem }) {
  const [cart, setCart] = useContext(cartContext);
  // states
  const [arrow, setArrow] = useState(true);
  const [adult, setAdult] = useState(0);
  const [baby, setBaby] = useState(0);
  const [child, setChild] = useState(0);
  const [checkIn, setCheckIn] = useState(moment(new Date()));
  const [checkOut, setCheckOut] = useState(moment(new Date()));
  const [location, setlocation] = useState("");

  const [filterData, setFilterData] = useState({
    location: { location },
    checkIn: { checkIn },
    checkOut: { checkOut },
    adult: { adult },
    baby: { baby },
    child: { child },
  });
  console.log(cart);
  console.log(cart.filterData.adult.adult + 1);
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

  return (
    <div
      className="border"
      style={{
        height: "80vh",
      }}
    >
      <p>Where Do You Want To Go</p>
      <div className="p-3">
        <h3 className="py-3 text-danger border">{singleItem[0].location}</h3>

        {/* date picker */}
        <DatePicker
          checkOut={checkOut}
          setCheckOut={setCheckOut}
          checkIn={checkIn}
          setCheckIn={setCheckIn}
        />
        <div className="row mt-3">
          <div className="col-10">
            Adult:{cart.filterData.adult.adult + 1} Child:{" "}
            {cart.filterData.child.child} Baby: {cart.filterData.baby.baby + 1}
            <br />
            <small className="mx-auto text-danger">
              **Have one adult is mendetory!
            </small>
          </div>
        </div>

        <PersonSelect
          setAdult={setAdult}
          setBaby={setBaby}
          setChild={setChild}
        />
      </div>
    </div>
  );
}

export default ReserveDetails;
