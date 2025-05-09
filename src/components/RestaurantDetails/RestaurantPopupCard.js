import RatingStar from "../../../assets/icons/star-in-circle.svg";

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
    <div className="shadow-xl/15 p-6 border-theme-base-50 border-1 rounded-2xl">
      <div className="flex items-center">
        <div className="flex items-center font-bold">
          <RatingStar className="w-5 h-5" />
          <p className="mx-0.5">
            {avgRating}({totalRatingsString})
            <span className="opacity-50 font-normal"> • </span>
          </p>
        </div>
        <p className="font-bold">{costForTwoMessage}</p>
      </div>
      <p className="text-sm text-theme-orange my-1">{cuisines.join(", ")}</p>
      <p className="font-semibold">
        Outlet -
        <span className="font-light opacity-50 text-sm mx-2">{areaName}</span>
      </p>
      <p className="text-sm text-theme-base-800 font-semibold">
        {sla?.slaString}
      </p>
    </div>
  );
};

export default RestaurantPopupCard;
