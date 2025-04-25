import useRestaurantDetails from "../../hooks/useRestaurantDetails";
import RestaurantPopupCard from "./RestaurantPopupCard";
import RestaurantMenuCategory from "./RestaurantMenuCategory";

const RestaurantDetails = () => {
  const {
    restData,
    restaurantName,
    restaurantPopupCardData,
    restaurantMenu,
    showMenu,
    setShowMenu,
  } = useRestaurantDetails();

  return (
    <div className="w-1/2 mx-auto my-5">
      {restData ? (
        <>
          <h2 className="text-[28px] m-0 py-5 px-1">{restaurantName}</h2>
          <RestaurantPopupCard data={restaurantPopupCardData} />
          {restaurantMenu.map((category, index) => (
            <RestaurantMenuCategory
              key={`menu_list_${index}`}
              data={category?.card?.card}
              showMenu={showMenu}
              setShowMenu={setShowMenu}
            />
          ))}
        </>
      ) : (
        <>
          <h3 className="text-[28px] py-5 bg-neutral-200 text-neutral-200">
            shimmer
          </h3>
          <div className="w-full">
            <div className="w-full h-60 rounded-xl bg-neutral-200"></div>
            <p className="w-1/2 bg-neutral-200 text-neutral-200 my-2">
              shimmer
            </p>
            <p className="w-3/4 bg-neutral-200 text-neutral-200">shimmer</p>
            <p className="w-4/5 bg-neutral-200 text-neutral-200 my-2">
              shimmer
            </p>
            <p className="w-1/3 bg-neutral-200 text-neutral-200">shimmer</p>
          </div>
        </>
      )}
    </div>
  );
};

export default RestaurantDetails;
