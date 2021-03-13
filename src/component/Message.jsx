import React from "react";

function Message({ item }) {
  console.log();
  return (
    <div className="m-4">
      <h1>Review House Rules</h1>
      <b>3 nights in Dhaka</b>
      <div className="row">
        <div className="col-lg-6">Dhaka bangladesh</div>
        <div className="col-lg-6">Chittagong bangladesh</div>
      </div>
      <p>Self check-in with building stuff</p>
      <hr style={{ width: "100%" }}></hr>
      <h1>Things to keep in mind</h1>
      <p>Product section</p>
      <p>Product section</p>
      <p>Product section</p>
    </div>
  );
}

export default Message;
