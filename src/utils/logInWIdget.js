import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

import LoginLogic from "../utils/LoginLogic";

function LogInWIdget({ signedIn, setSignIn }) {
  // Phone package
  const [value, setValue] = useState();
  return (
    <div
      className="p-5 content"
      style={{
        background: "-webkit-linear-gradient(#92fe9d , #00c9ff)",
      }}
    >
      <form
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <PhoneInput
          country="US"
          placeholder="Phone"
          value={value}
          id="phone"
          type="tel"
          name="phone"
          onChange={setValue}
        />

        <button className="btn btn-primary disable">Sign In With Phone</button>

        <LoginLogic signedIn={signedIn} setSignIn={setSignIn} />
      </form>
    </div>
  );
}

export default LogInWIdget;
