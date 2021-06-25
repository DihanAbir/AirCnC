import { af } from "date-fns/locale";
import React from "react";
import { Link } from "react-router-dom";
import { ExpData } from "../utils/Data/Exprence";
import { GiAlliedStar } from "react-icons/gi";

function AllExprence() {
  const datas = ExpData;
  const a = Math.floor(Math.random() * 5) + 1;
  return (
    <div className="container">
      <h1 className="HeaderH5 text-center my-5">All Home Services</h1>
      <div className="row">
        {datas.map((item) => (
          <div className="services col-4 my-3">
            <Link className="Link" to={"/singleService/" + item.id}>
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
                <div className="d-flex justify-content-between address">
                  <b>{item.location}</b>
                  <b>{item.type}</b>
                </div>

                <div className="d-flex justify-content-between postInfo">
                  <small>{item.title}</small>
                  <small>{item.date}</small>
                </div>
                <div className="d-flex justify-content-between review">
                  <h6 className="text-danger">Review: {item.review}</h6>
                  <div className="star">
                    <GiAlliedStar />
                    <GiAlliedStar />
                    <GiAlliedStar />
                    <GiAlliedStar />
                    <GiAlliedStar />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllExprence;
