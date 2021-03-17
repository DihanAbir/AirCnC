import React from "react";
import { Link } from "react-router-dom";
import { HomeData } from "../utils/Data/Exprence";

function AllServices() {
  const datas = HomeData;
  return (
    <div className="container">
      <h1 className="text-center my-5">Allsss Home services</h1>
      <div className="row">
        {datas.map((item) => (
          <div className="services col-4 my-3">
            <Link to={"/singleService/" + item.id}>
              <div
                className=" border"
                style={{
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundImage: `url(${item.image})`,
                  height: "200px",
                }}
              ></div>
              <div className="Service-detials">
                <b>{item.location}</b>
                <span>-</span>
                <b>{item.type}</b>
                <br />
                <small>{item.title}</small>
                <p>review: {item.review}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllServices;
