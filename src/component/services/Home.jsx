import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import { Link } from "react-router-dom";

import { ExpData } from "../../utils/Data/Exprence";

function Home() {
  const datas = ExpData;
  const [data, setData] = useState([datas]);

  return (
    <div>
      <div className="row d-flex">
        <div className="col-lg-6 ml-auto">
          <h5>Home Service</h5>
        </div>
        <div className="col-lg-6 d-flex flex-row-reverse">
          <button className="seemoreBtn btn btn-light">
            <b>
              <Link to="/allServices">See More</Link>
            </b>
          </button>
        </div>
      </div>

      <Carousel itemsToShow={4} enableAutoPlay={false} autoPlaySpeed={7000}>
        {data[0].slice(0, 7).map((item) => (
          // <Slider filtereditems={filtereditems} />
          <Link to={"/singleService/" + item.id}>
            <div>
              <div
                className=" border "
                style={{
                  backgroundSize: "cover",
                  backgroundImage: `url(${item.image})`,
                  height: "200px",
                  width: "100%",
                }}
              ></div>
              <b>{item.location}</b>
              <span>-</span>
              <b>{item.type}</b>
              <br />
              <small>{item.title}</small>
              <p>review: {item.review}</p>
            </div>
          </Link>
        ))}
      </Carousel>
    </div>
  );
}

export default Home;
