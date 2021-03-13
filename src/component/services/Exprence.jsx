import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ExpData } from "../../utils/Data/Exprence";
import Product from "./Product";

function Exprence() {
  const datas = ExpData;
  const [data, setData] = useState([datas]);
  // console.log(data);

  return (
    <div>
      <h5>Exprence</h5>
      <div className="row">
        {data[0].slice(0, 4).map((item) => (
          <div className="col-3">
            <Link to={"/singleService/" + item.id}>
              <div
                className=" border"
                style={{
                  backgroundSize: "cover",
                  backgroundImage: `url(${item.image})`,
                  height: "200px",
                }}
              ></div>
              <b>{item.location}</b>
              <span>-</span>
              <b>{item.type}</b>
              <br />
              <small>{item.title}</small>
              <p>review: {item.review}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Exprence;
