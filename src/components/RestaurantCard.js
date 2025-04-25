import React from "react";
import RatingStar from "../../assets/star-in-circle.svg";
import { IMG_CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, avgRating, sla, cuisines, areaName } =
    resData.info;
  return (
    <>
      <div>
        <img
          src={IMG_CDN_URL + cloudinaryImageId}
          className="w-full h-60 rounded-xl object-cover"
        />
      </div>
      <div className="my-2">
        <p className="font-medium text-lg overflow-ellipsis whitespace-nowrap overflow-hidden mb-1">
          {name}
        </p>
        <div className="flex text-sm">
          <p className="flex items-center font-light">
            <RatingStar className="w-5 h-5" />
            <span>{avgRating} •</span>
          </p>
          <p className="font-normal ml-2"> {sla.slaString}</p>
        </div>
        <p className="opacity-60 text-sm font-light overflow-ellipsis overflow-hidden whitespace-nowrap mb-2">
          {cuisines.toString()}
        </p>
        <p className="opacity-80 font-light">{areaName}</p>
      </div>
    </>
  );
};

export default RestaurantCard;
