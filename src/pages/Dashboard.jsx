import { CircularProgress } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";

import { cartContext } from "../App";
import Booking from "../utils/Booking";

function Dashboard() {
  const [bookings, setBookings] = useState([]);
  const [cart, setCart, signedIn1, setSignIn1] = useContext(cartContext);

  useEffect(() => {
    // console.log(sessionStorage.getItem("token"));
    fetch("http://localhost:4000/bookings?email=" + signedIn1.email, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((datas) => {
        setBookings(datas);
        console.log(datas);
      });
  }, []);
  return (
    <div className="p-4 container">
      <h3 className="text-primary">Admin Deshboard</h3>
      {bookings.length === 0 ? (
        <div>
          <CircularProgress color="secondary" />
        </div>
      ) : (
        <div>
          <h3>Total bookings: {bookings.length}</h3>

          {bookings.map((booking, index) => (
            <Booking booking={booking} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard;
