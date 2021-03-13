import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { ExpData } from "../utils/Data/Exprence";

function SingleService() {
  const { id } = useParams();

  const datas = ExpData;

  const singleItem = datas.filter((item) => item.id === id);
  console.log(singleItem);
  return (
    <div className="container p-5">
      <img src={singleItem[0].image} alt="" />
      <div className="row">
        <div className="col-lg-6">
          <p>single page{id}</p>
          <p>{singleItem[0].title}</p>
          <p>{singleItem[0].id}</p>
          <p>{singleItem[0].location}</p>
        </div>
        <div className="col-lg-6 text-center">
          <button className="btn btn-primary">
            <Link style={{ color: "white" }} to="/checkOut">
              Reserve
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleService;
