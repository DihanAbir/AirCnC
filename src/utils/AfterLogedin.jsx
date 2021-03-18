import React from "react";

function AfterLogedin({ signedIn }) {
  return (
    <div
      className="content border "
      style={{
        height: "300px",
        width: "300px",
        backgroundColor: "white",
      }}
    >
      <h2>{signedIn.displayName}</h2>
      <h5>{signedIn.email}</h5>
      <img src={signedIn.photoURL} alt="" />
    </div>
  );
}

export default AfterLogedin;
