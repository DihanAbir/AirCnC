import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

import LoginLogic from "../utils/LoginLogic";

function LogInWIdget({ signedIn, setSignIn }) {
  // Phone package
  const [value, setValue] = useState();
  return (
    <div
      className="content border "
      style={{
        height: "300px",
        width: "300px",
        backgroundColor: "salmon",
      }}
    >
      <form
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <PhoneInput country="US" value={value} onChange={setValue} />
        <input id="phone" type="tel" name="phone" />

        <LoginLogic signedIn={signedIn} setSignIn={setSignIn} />
      </form>
    </div>
  );
}

export default LogInWIdget;
