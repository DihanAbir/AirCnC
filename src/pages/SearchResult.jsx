import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../App";
import { ExpData } from "../utils/Data/Exprence";

function SearchResult() {
  const [cart, setCart] = useContext(cartContext);

  const [searchValue, setSearchValue] = useState("");
  const lction = cart.filterData.location.location;
  console.log(lction);
  const data = ExpData;

  const filteredDatas = data.filter((division) => division.location === lction);

  const tags = [
    "cancellation flexibility",
    "price",
    "type is place",
    "instance book",
    "More Filter",
  ];

  return (
    <div className="container">
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
        <p className="text-center mt-5">baby: {cart.filterData.baby.baby}</p>
        {/* tags end  */}
        <div className="row">
          <div className="col-6">
            <p>252 stay for april 13-17, 3 guests</p>
            <b style={{ color: "#1954E8" }}>
              Total Result : {filteredDatas.length}
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
                {cart.filterData.location.location}
              </span>{" "}
              Division
            </h4>
            {tags.map((tag) => (
              <button
                style={{ background: "#E8E7E6", borderRadius: "30px" }}
                className=" ml-1 mt-2 btn btn-light border-rounded"
              >
                {tag}
              </button>
            ))}
            {/* tags end  */}

            {/* filter data show */}
            <div>
              {filteredDatas.map((item) => (
                <Link to={"/singleService/" + item.id}>
                  <div className="row">
                    <div className="col-lg-6 my-3">
                      <img src={item.image} className="img-thumbnail" alt="" />
                    </div>
                    <div
                      className="col-6 my-3 border"
                      style={{
                        background: "#E8E7E6",
                        padding: "30px",
                        borderRadius: "20px",
                      }}
                    >
                      <div className="Service-detials">
                        <b>{item.location}</b>
                        <span>-</span>
                        <b>{item.type}</b>
                        <br />
                        <small>{item.title}</small>
                        <p>review: {item.review}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="col-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin"
              width="100%"
              height="100%"
              frameborder="0"
              style={{ border: "0" }}
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
              /* style=
            {{
              width: "600",
              height: "450",
              frameborder: "0",
              style: "border:0;",
              allowfullscreen: "",
              ariaHidden: "false",
              tabindex: "0",
            }} */
            ></iframe>
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
