import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// import { ExpData } from "../../utils/Data/Exprence";

function Home(props) {
  const datas = props.services;
  const [data, setData] = useState([datas]);

  // console.log(props.services);
  return (
    <div>
      <div className="row d-flex">
        <div className="col-lg-6 ml-auto">
          <h5 className="HeaderH5">Home Service</h5>
        </div>
        <div className="col-lg-6 d-flex flex-row-reverse">
          <button className="seemoreBtn btn btn-light">
            <b>
              <Link className="Link" to="/allServices">
                See More
              </Link>
            </b>
          </button>
        </div>
      </div>

      <Carousel itemsToShow={4} enableAutoPlay={false} autoPlaySpeed={7000}>
        {data[0].slice(0, 7).map((item) => (
          // <Slider filtereditems={filtereditems} />
          <Link className="Link p-2" to={"/singleService/" + item.id}>
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
                    style={{
                      textTransform: "capitalize",
                    }}
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
        ))}
      </Carousel>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { services: state.Homeservices };
};

const connectedComponent = connect(mapStateToProps, null);
export default connectedComponent(Home);
