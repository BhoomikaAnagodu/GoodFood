import React from "react";
import RatingStar from "../../assets/star-in-circle.svg";
import { IMG_CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, avgRating, sla, cuisines, areaName } =
    resData.info;
  return (
    <>
      <div>
        <img src={IMG_CDN_URL + cloudinaryImageId} className="res-logo" />
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
    </>
  );
};

export default RestaurantCard;
