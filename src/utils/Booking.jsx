import React from "react";

function Booking({ booking }) {
  return (
    <div className="border mt-3 p-4">
      <p>{booking.displayName}</p>
      <p>{booking.title}</p>
      <p>{booking.location}</p>
    </div>
  );
}

export default Booking;
