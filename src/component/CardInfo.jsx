import React from "react";

function CardInfo({ item }) {
  console.log();
  return (
    <div className="my-3">
      <h3 className="border p-2 ">CardInfo Address</h3>

      <div className="container">
        <formControl>
          <label for="fname">Bank Name</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
          />

          <label for="lname">Gateway Name</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
          />

          <label for="lname">Card Number</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
          />

          <label for="lname">Card Pin</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
          />

          <label for="country">Country</label>
          <select id="country" name="country">
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
          </select>

          <label for="subject">Subject</label>
          <textarea></textarea>
        </formControl>
      </div>
    </div>
  );
}

export default CardInfo;
