import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { RESTURANT_LIST } from "../utils/mockData.js";

const RestaurantContainer = () => {
  const [restList, setRestList] = useState(RESTURANT_LIST);

  return (
    <div className="res-main-container">
      <div className="res-container">
        <button
          className="top-resturant-fltr"
          onClick={() => {
            const filteredList = restList.filter(
              (list) => list.info.avgRating >= 4.5
            );
            setRestList(filteredList);
          }}
        >
          Top Resturants
        </button>
        <div className="res-grid">
          {restList.map((data) => (
            <RestaurantCard key={data.info.id} resData={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantContainer;
