import React from "react";
import RatingStar from "../assets/star.svg";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, avgRating, sla, cuisines, areaName } =
    resData.info;
  return (
    <div className="res-card">
      <div>
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
          className="res-logo"
        />
      </div>
      <div className="res-details">
        <p className="res-name">{name}</p>
        <div className="ratings-time">
          <p className="res-ratings">
            <RatingStar className="rating-star" />
            <span>{avgRating} •</span>
          </p>
          <p className="delivery-time">{sla.slaString}</p>
        </div>
        <p className="res-cuisines">{cuisines.toString()}</p>
        <p className="res-location">{areaName}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
