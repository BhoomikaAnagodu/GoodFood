import RatingStar from "../../../assets/star-in-circle.svg";

const RestaurantPopupCard = ({ data }) => {
  const {
    avgRating,
    costForTwoMessage,
    totalRatingsString,
    cuisines,
    areaName,
    sla,
  } = data;
  return (
    <div className="rest-detail-popup-card">
      <div className="ratings-cost">
        <p className="res-ratings">
          <RatingStar className="rating-star" />
          <p className="total-ratings">
            {avgRating}({totalRatingsString})<span> •</span>
          </p>
        </p>
        <p className="delivery-time">{costForTwoMessage}</p>
      </div>
      <p>{cuisines.join(", ")}</p>
      <p>Outlet - {areaName}</p>
      <p>{sla?.slaString}</p>
    </div>
  );
};

export default RestaurantPopupCard;
