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
  const [adult, setAdult] = useState(1);
  const [baby, setBaby] = useState(1);
  const [child, setChild] = useState(1);
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
      <p className="filterP">Where Do You Want To Go</p>
      <div className="p-3">
        <h3 className="HeaderH5 text-uppercase font-weight-bold py-3 text-danger border">
          {singleItem[0].location}
        </h3>

        {/* date picker */}
        <DatePicker
          checkOut={checkOut}
          setCheckOut={setCheckOut}
          checkIn={checkIn}
          setCheckIn={setCheckIn}
        />
        <div className="row mt-3">
          <div className="col-10">
            <p
              style={{
                fontFamily: "monospace",
                fontWeight: "bold",
                color: "grey  ",
              }}
            >
              Adult: 4 || Child: 01 || Baby: 0
            </p>

            <small className="warning mx-auto text-danger">
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
