import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

function Date({ setCheckIn, checkIn, setCheckOut }) {
  const classes = useStyles();

  const handleChangeDateIn = (e) => {
    setCheckIn(e.target.value);
  };
  const handleChangeDateOut = (e) => {
    setCheckOut(e.target.value);
  };

  return (
    <div className="row">
      <div className="col-6">
        <form className={classes.container} noValidate>
          <TextField
            id="date"
            label="CheckIn"
            type="date"
            onLoad="getDate()"
            defaultValue="getDate()"
            onChange={handleChangeDateIn}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
      </div>
      <div className="col-6">
        <form className={classes.container} noValidate>
          <TextField
            id="date"
            label="CheckOut"
            type="date"
            onLoad="getDate()"
            defaultValue="getDate()"
            onChange={handleChangeDateOut}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
      </div>
    </div>
  );
}

export default Date;
