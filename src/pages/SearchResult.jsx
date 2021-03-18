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
        <div className="mt-4 border text-center" style={{ width: "100%" }}>
          <input
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            style={{ width: "60%" }}
            type="search"
            placeholder="search Location"
          />
        </div>
        <p className="text-center mt-5">
          baby: {cart ? cart.filterData.baby.baby : 0}
        </p>
        {/* tags end  */}
        <div className="row d-flex">
          <div className="col-7">
            <p>252 stay for april 13-17, 3 guests</p>
            <b style={{ color: "#1954E8" }}>
              Total Result : {filteredDatas.length ? filteredDatas.length : 0}
            </b>
            <h4 style={{ textTransform: "capitalize" }}>
              Stay in{" "}
              <span
                style={{
                  color: "salmon",
                  fontSize: "24px",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                {cart ? cart.filterData.location.location : "Dhaka"}
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
                        <h4
                          className="text-black"
                          style={{ textTransform: "capitalize" }}
                        >
                          {item.location}
                        </h4>
                        <span>-</span>
                        <b>{item.type}</b>
                        <br />
                        <h6 className="text-gray">{item.title}</h6>
                        <p className="text-gray">Review: {item.review}</p>
                        <div className="d-flex justify-content-between">
                          <p className="text-gray">
                            Total Star: {item.review}{" "}
                          </p>
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

// <div className="services  my-3">
//   <div className="col-12">
//     <div
//       className=" border"
//       style={{
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundImage: `url(${item.image})`,
//         height: "200px",
//       }}
//     ></div>
//   </div>

//   <div className="col-6">
//     <div className="Service-detials">
//       <b>{item.location}</b>
//       <span>-</span>
//       <b>{item.type}</b>
//       <br />
//       <small>{item.title}</small>
//       <p>review: {item.review}</p>
//     </div>
//   </div>
// </div>;
