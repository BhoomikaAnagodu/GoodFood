import useRestaurantDetails from "../../hooks/useRestaurantDetails";
import RestaurantPopupCard from "./RestaurantPopupCard";
import RestaurantMenu from "./RestaurantMenu";
import { ShimmerCard } from "../ShimmerContainer";

const RestaurantDetails = () => {
  const { restData } = useRestaurantDetails();

  const restaurantName = restData?.find((list) => list?.card?.card?.text)?.card
    ?.card?.text;

  const restaurantPopupCardData = restData?.find(
    (list) => list?.card?.card?.info
  )?.card?.card?.info;

  const restaurantMenu = restData?.find(
    (list) => list?.groupedCard?.cardGroupMap
  )?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  return (
    <div className="rest-detail-container">
      {restData ? (
        <>
          <h2 className="rest-name">{restaurantName}</h2>
          <RestaurantPopupCard data={restaurantPopupCardData} />
          <RestaurantMenu data={restaurantMenu} />
        </>
      ) : (
        <>
          <h3 className="shimmer-title">shimmer</h3>
          <div className="shimmer-details-card">
            <div className="shimmer-img"></div>
            <p className="shimmer-title">shimmer</p>
            <p className="shimmer-caption">shimmer</p>
            <p className="shimmer-caption1">shimmer</p>
            <p className="shimmer-caption2">shimmer</p>
          </div>
        </>
      )}
    </div>
  );
};

export default RestaurantDetails;
