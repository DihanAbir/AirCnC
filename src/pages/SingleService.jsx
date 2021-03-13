import React from "react";
import { useParams } from "react-router";
import { ExpData } from "../utils/Data/Exprence";

function SingleService() {
  const { id } = useParams();

  const datas = ExpData;

  const singleItem = datas.filter((item) => item.id === id);
  console.log(singleItem);
  return (
    <div className="container p-5">
      <p>single page{id}</p>
      <p>{singleItem[0].title}</p>
      <p>{singleItem[0].id}</p>
      <p>{singleItem[0].location}</p>
      <img src={singleItem[0].image} alt="" />
    </div>
  );
}

export default SingleService;
