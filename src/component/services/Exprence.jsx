import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ExpData } from "../../utils/Data/Exprence";
import Product from "./Product";

function Exprence(props) {
  const datas = props.services;
  const [data, setData] = useState([datas]);
  // console.log(data);

  return (
    <div className="pt-2 pb-5 my-2 border-bottom">
      <div className="row d-flex">
        <div className="col-lg-6 ml-auto">
          <h5>Exprence</h5>
        </div>
        <div className="col-lg-6 d-flex flex-row-reverse">
          <button className="seemoreBtn btn btn-light">
            <Link className="Link" to="/allExprence">
              <b>See More</b>
            </Link>
          </button>
        </div>
      </div>
      <div className="row">
        {data[0].slice(0, 4).map((item) => (
          <div className="col-3">
            <Link className="Link" to={"/singleService/" + item.id}>
              <div
                className=" border"
                style={{
                  backgroundSize: "cover",
                  // backgroundImage: `url(${item.image})`,
                  height: "200px",
                }}
              >
                <div className="imgcontainer">
                  <img
                    style={{ height: "200px" }}
                    src={item.image}
                    alt="Avatar"
                    className="image"
                  />
                  <div className="overlay">
                    <div
                      style={{ textTransform: "capitalize" }}
                      className="text"
                    >
                      {item.title}
                    </div>
                  </div>
                </div>
              </div>
              <b>{item.location}</b>
              <span>-</span>
              <b>{item.type}</b>
              <br />
              <p className="text-gray">{item.title}</p>
              <b className="text-gray">review: {item.review}</b>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { services: state.services };
};

const connectedComponent = connect(mapStateToProps, null);
export default connectedComponent(Exprence);
