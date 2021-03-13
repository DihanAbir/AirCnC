import React from "react";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

function Counter({ setAdult }) {
  setAdult(5);
  const classes = useStyles();
  const [counte, setCounte] = useState(0);
  return (
    <div className={classes.root}>
      <ButtonGroup
        color="secondary"
        aria-label="outlined secondary button group"
      >
        <Button onClick={() => setCounte(counte + 1)}>+</Button>
        <Button
          onChange={() => {
            setAdult(counte);
          }}
        >
          {counte}
        </Button>
        <Button onClick={() => setCounte(counte - 1)}>-</Button>
      </ButtonGroup>
    </div>
  );
}

export default Counter;
