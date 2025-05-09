import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useRestaurantDetails from "../../hooks/useRestaurantDetails";
import useAddToCart from "../../hooks/useAddToCart";
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
    openModal,
    handleCloseModal,
    handleOpenModal,
    newCartData,
  } = useRestaurantDetails();

  const { items } = useSelector((store) => store.cart);
  const { dispatcherFn } = useAddToCart({
    restDetails: {
      name: restaurantPopupCardData?.name,
      areaName: restaurantPopupCardData?.areaName,
      cloudinaryImageId: restaurantPopupCardData?.cloudinaryImageId,
    },
    handleOpenModal,
    handleCloseModal,
    newCartData,
  });

  return (
    <div className="w-1/2 mx-auto my-5 relative">
      {restData ? (
        <>
          <h2 className="text-[28px] m-0 py-5 px-1 font-bold">
            {restaurantName}
          </h2>
          <RestaurantPopupCard data={restaurantPopupCardData} />
          {restaurantMenu.map((category, index) => (
            <RestaurantMenuCategory
              key={`menu_list_${index}`}
              data={category?.card?.card}
              showMenu={showMenu}
              setShowMenu={setShowMenu}
              dispatcherFn={dispatcherFn}
            />
          ))}

          {openModal && (
            <div className="sticky w-2/3 mx-auto bottom-5 z-10 modal-shadow bg-white p-5">
              <div className="px-3">
                <h1 className="text-lg font-bold">Items already in cart</h1>
                <p className="text-sm font-light py-3">
                  Your cart contains items from other restaurant. Would you like
                  to reset your cart for adding items from this restaurant?
                </p>
                <div className="py-3 flex justify-between gap-4">
                  <button
                    className="btn w-1/2 text-sm border-2 text-[#1ba672] border-[#1ba672] hover:shadow-xl"
                    onClick={handleCloseModal}
                  >
                    No
                  </button>
                  <button
                    className="btn w-1/2 text-sm uppercase bg-theme-green text-white hover:shadow-xl"
                    onClick={dispatcherFn?.handleRefreshCart}
                  >
                    Yes, Start Afresh
                  </button>
                </div>
              </div>
            </div>
          )}
          {items?.length > 0 && (
            <div className="fixed bottom-0 w-1/2 bg-[#1ba672] text-white flex justify-between p-3">
              <p>{items?.length} item added</p>
              <Link
                to={"/cart"}
                className="uppercase font-semibold cursor-pointer"
              >
                View Cart
              </Link>
            </div>
          )}
        </>
      ) : (
        <>
          <h3 className="text-[28px] py-5 bg-theme-base-50 text-theme-base-50">
            shimmer
          </h3>
          <div className="w-full">
            <div className="w-full h-60 rounded-xl bg-theme-base-50"></div>
            <p className="w-1/2 bg-theme-base-50 text-theme-base-50 my-2">
              shimmer
            </p>
            <p className="w-3/4 bg-theme-base-50 text-theme-base-50">shimmer</p>
            <p className="w-4/5 bg-theme-base-50 text-theme-base-50 my-2">
              shimmer
            </p>
            <p className="w-1/3 bg-theme-base-50 text-theme-base-50">shimmer</p>
          </div>
        </>
      )}
    </div>
  );
};

export default RestaurantDetails;
