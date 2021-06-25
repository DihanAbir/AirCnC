import React from "react";
import Counter from "./Counter";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

function PersonSelect({ setAdult, setBaby, setChild }) {
  const classes = useStyles();

  return (
    <>
      <div
        className={" mt-3 p-3"}
        style={{
          background: "#FDF5E6",
          border: "2px solid salmon",
        }}
      >
        <div className="row">
          <div className="col-4">Adult</div>
          <div className="col-4 offset-2">
            <div>
              <Adult setAdult={setAdult} />
            </div>
          </div>
          <div className="col-4">Child</div>
          <div className="col-4 offset-2">
            <Child setChild={setChild} />
          </div>
          <div className="col-4">Baby</div>
          <div className="col-4 offset-2">
            <Baby setBaby={setBaby} />
          </div>
        </div>
      </div>
    </>
  );
}

export default PersonSelect;

function Adult({ setAdult }) {
  const [counte, setCounte] = useState(0);
  setAdult(counte);

  return (
    <ButtonGroup color="secondary" aria-label="outlined secondary button group">
      <Button onClick={() => setCounte(counte + 1)}>+</Button>
      <Button>{counte}</Button>
      <Button
        onClick={() => (counte <= 0 ? setCounte(0) : setCounte(counte - 1))}
      >
        -
      </Button>
    </ButtonGroup>
  );
}

function Child({ setChild }) {
  const [counte, setCounte] = useState(0);
  setChild(counte);

  return (
    <ButtonGroup color="secondary" aria-label="outlined secondary button group">
      <Button onClick={() => setCounte(counte + 1)}>+</Button>
      <Button>{counte}</Button>
      <Button
        onClick={() => (counte <= 0 ? setCounte(0) : setCounte(counte - 1))}
      >
        -
      </Button>
    </ButtonGroup>
  );
}

function Baby({ setBaby }) {
  const [counte, setCounte] = useState(0);
  setBaby(counte);

  return (
    <ButtonGroup color="secondary" aria-label="outlined secondary button group">
      <Button onClick={() => setCounte(counte + 1)}>+</Button>
      <Button>{counte}</Button>
      <Button
        onClick={() => (counte <= 0 ? setCounte(0) : setCounte(counte - 1))}
      >
        -
      </Button>
    </ButtonGroup>
  );
}
