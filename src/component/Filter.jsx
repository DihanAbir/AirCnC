import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import DatePicker from "../utils/Date";
import BasicTextFields from "../utils/Input";
import PersonSelect from "../utils/PersonSelect";

function Filter() {
  const [arrow, setArrow] = useState(true);
  const [adult, setAdult] = useState(0);
  const [baby, setBaby] = useState(0);
  const [child, setChild] = useState(0);

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
        <BasicTextFields />

        {/* date picker */}
        <DatePicker />
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
        <button className="btn btn-danger">Search</button>
      </div>
    </div>
  );
}

export default Filter;
