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
          <p>single page{id}</p>
          <p>{singleItem[0].title}</p>
          <p>{singleItem[0].id}</p>
          <p>{singleItem[0].location}</p>
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
