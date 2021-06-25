import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../App";
import { ExpData } from "../utils/Data/Exprence";
import Map from "../utils/map";

function SearchResult() {
  const [cart, setCart] = useContext(cartContext);

  const [searchValue, setSearchValue] = useState("");
  const lction = cart.filterData.location.location
    ? cart.filterData.location.location
    : "Dhaka";

  console.log(lction);
  const data = ExpData;

  // const filteredDatas = data.filter((division) => division.location === lction);
  const filteredDatas = ExpData;

  const tags = [
    "cancellation flexibility",
    "price",
    "type is place",
    "instance book",
    "More Filter",
  ];

  return (
    <div className="container-fluid p-5">
      <div>
        <p className="text-center mt-5">
          Baby: {cart ? cart.filterData.baby.baby : 0}
        </p>
        {/* tags end  */}
        <div className="row d-flex">
          <div className="col-7">
            <p style={{ fontFamily: "cursive" }}>
              252 stay for april 13-17, 3 guests
            </p>
            <h6 style={{ color: "#0080ff" }}>
              Total Result : {filteredDatas.length ? filteredDatas.length : 0}
            </h6>
            <h4 style={{ color: "salmon", textTransform: "capitalize" }}>
              Stay in{" "}
              <span
                style={{
                  color: "salmon",
                  fontSize: "24px",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                {cart ? cart.filterData.location.location : "Dhaka "}
              </span>
              Division
            </h4>
            {tags.map((tag) => (
              <button
                style={{ background: "#E8E7E6", borderRadius: "30px" }}
                className=" ml-1 my-2 btn btn-light border-rounded"
              >
                {tag}
              </button>
            ))}
            {/* tags end  */}

            {/* filter data show */}
            <div>
              {filteredDatas.map((item) => (
                <Link className="Link" to={"/singleService/" + item.id}>
                  <div className="searchCard">
                    <div className="searchCard-item">
                      <img
                        style={{
                          background: "#E8E7E6",
                          borderRadius: "20px",
                          // objectFit: "",
                        }}
                        src={item.image}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div
                      className="searchCard-item  ml-2 mb-3 border"
                      style={{
                        background: "#DFE3EE",
                        borderRadius: "20px",
                      }}
                    >
                      <div className="Service-detials p-4">
                        <h5
                          className="text-black"
                          style={{ textTransform: "capitalize" }}
                        >
                          {item.location}
                        </h5>
                        <span>-</span>
                        <h5>{item.type}</h5>
                        <br />
                        <h5 className="text-gray">{item.title}</h5>
                        <h5 className="text-gray">Review: {item.review}</h5>
                        <div className="d-flex justify-content-between">
                          <h5 className="text-gray">
                            Total Star: {item.review}{" "}
                          </h5>
                          <b className="text-gray">{item.price}/night</b>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="col-5">
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
}

// export default SearchResult;
export default SearchResult;
