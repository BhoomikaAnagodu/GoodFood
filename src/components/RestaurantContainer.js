import React from "react";
import RestaurantCard from "./RestaurantCard";
import ShimmerContainer from "./ShimmerContainer.js";

const RestaurantContainer = (props) => {
  const { filteredRestList, filterTopResturants } = props;
  return (
    <div className="res-main-container">
      <div className="res-container">
        {filteredRestList.length === 0 ? (
          <ShimmerContainer />
        ) : (
          <>
            <button
              className="top-resturant-fltr"
              onClick={filterTopResturants}
            >
              Top Resturants
            </button>
            <div className="res-grid">
              {filteredRestList.map((data) => (
                <RestaurantCard key={data.info.id} resData={data} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default RestaurantContainer;
