import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "../utils/Date";
import BasicTextFields from "../utils/Input";
import PersonSelect from "../utils/PersonSelect";
import moment from "moment";

function Filter() {
  // states
  const [arrow, setArrow] = useState(true);
  const [adult, setAdult] = useState(0);
  const [baby, setBaby] = useState(0);
  const [child, setChild] = useState(0);
  const [checkIn, setCheckIn] = useState(
    moment(new Date()).format("YYYY-MM-DD")
  );
  const [location, setlocation] = useState("");

  const [filterData, setFilterData] = useState({
    location: { location },
  });

  useEffect(() => {
    setFilterData({ location: { location }, checkIn: { checkIn } });
  }, [location, checkIn]);

  // functions
  console.log(filterData);
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
      <p>Where Do You Want To Go</p>
      <div className="p-3">
        <BasicTextFields setlocation={setlocation} />

        {/* date picker */}
        <DatePicker checkIn={checkIn} setCheckIn={setCheckIn} />
        <div className="row mt-3">
          <div className="col-10">
            Adult:{adult} Child: {child} Baby: {baby}
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
        <button className="btn btn-danger">
          <Link style={{ color: "white" }} to="/search">
            Search
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Filter;
