import React, { useContext } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { cartContext } from "../App";
import Filter from "../component/Filter";
import ReserveDetails from "../component/ReserveDetails";
import { ExpData, HomeData } from "../utils/Data/Exprence";

function SingleService() {
  const [cart, setCart] = useContext(cartContext);
  const { id } = useParams();

  const datas = ExpData;
  const Homedatas = HomeData;
  const dataE = datas.filter((item) => item.id === id);
  const dataH = Homedatas.filter((item) => item.id === id);
  const singleItem = dataE.length ? dataE : dataH;

  console.log(singleItem);
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-lg-6">
          <img src={singleItem[0].image} alt="" />
          <p className="text-danger pt-3 font-italic pb-1">
            Page Identity: {id}
          </p>
          <h4 className="border p-3 text-capitalize">
            Price: ${singleItem[0].price}
          </h4>
          <h4 className=" p-2 HeaderH5 text-uppercase bg-light">
            {singleItem[0].title}
          </h4>
          <h4 className="text-center p-2 text-uppercase bg-light">
            {singleItem[0].location}
          </h4>
          <div className="d-flex  justify-content-between px-2">
            <b className="text-capitalize">{singleItem[0].type}</b>
            <b className="text-capitalize">{singleItem[0].location}</b>
          </div>
          <hr />

          <p style={{ fontFamily: "system-ui" }}>{singleItem[0].description}</p>
          <div className="border mt-3 p-3 d-flex  justify-content-between px-2">
            <b className="text-capitalize">Date: {singleItem[0].date}</b>
            <b className="text-capitalize">
              Total Rating: {singleItem[0].review}
            </b>
          </div>
          <div className="m-5 p-3 d-flex  justify-content-between px-2"></div>
        </div>
        <div className="col-lg-6 text-center">
          <ReserveDetails singleItem={singleItem} />
          <Link style={{ color: "white" }} to="/checkOut">
            <button
              onClick={() => {
                setCart({ ...cart, singleItem });
              }}
              className="btn btn-primary"
            >
              Reserve
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SingleService;
