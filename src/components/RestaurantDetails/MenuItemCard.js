import { useSelector } from "react-redux";

import { IMG_CDN_URL } from "../../utils/constants";
import NonVeg from "../../../assets/icons/non-veg.svg";
import Veg from "../../../assets/icons/dot-square.svg";
import RatingStar from "../../../assets/icons/star.svg";
import Tag from "../../../assets/icons/tag.svg";

const MenuItemCard = ({ data, style, dispatcherFn }) => {
  const {
    name,
    price,
    finalPrice,
    description,
    ratings,
    imageId,
    itemAttribute,
    variantsV2,
  } = data;
  const {
    handleAddItemtoCart,
    handleIncrementItemQuantity,
    handleDecrementItemQuantity,
  } = dispatcherFn;

  const items = useSelector((store) => store.cart.items);
  const itemPresentInCart = items.find((item) => item.id === data.id);

  const comboPrize =
    variantsV2?.pricingModels?.length &&
    Math.min(
      ...variantsV2?.pricingModels?.map((priceModel) => priceModel.price)
    );

  return (
    <div className={`flex justify-between items-center px-0 pt-4 ${style}`}>
      <div className="w-2/3">
        {itemAttribute?.vegClassifier === "NONVEG" && (
          <NonVeg className="w-5 h-5 p-0.5" />
        )}
        {itemAttribute?.vegClassifier === "VEG" && <Veg className="w-5 h-5" />}
        <p className="font-semibold text-base">{name}</p>
        <p className="flex items-center mb-2">
          {price && (
            <span
              className={
                finalPrice
                  ? "line-through pr-2 text-theme-base-500"
                  : "final-price"
              }
            >
              &#8377;{price / 100}
            </span>
          )}
          {finalPrice && (
            <>
              <span className="final-price">&#8377;{finalPrice / 100}</span>
              <Tag className="w-3 h-3 ml-1" />
            </>
          )}
          {variantsV2?.pricingModels && (
            <>
              <span className="final-price">&#8377;{comboPrize / 100}</span>
              <Tag className="w-3 h-3 ml-1" />
            </>
          )}
        </p>
        {ratings?.aggregatedRating?.rating && (
          <p className="text-sm flex">
            <span className="text-sm flex items-center text-theme-green font-semibold">
              <RatingStar className="w-3 h-3 mr-1" />
              {ratings?.aggregatedRating?.rating}
            </span>
            <span className="ml-2 rating-count">
              ({ratings?.aggregatedRating?.ratingCountV2})
            </span>
          </p>
        )}
        <p className="my-2">{description}</p>
      </div>
      <div className="relative">
        <img
          src={IMG_CDN_URL + imageId}
          className="w-39 h-36 rounded-lg object-cover ml-2 shadow"
        />
        {itemPresentInCart?.quantity > 0 ? (
          <div className="btn-primary  bg-theme-base-800 p-0 rounded-sm uppercase absolute bottom-[-15%] left-[25%]">
            <button
              className="cursor-pointer p-2 hover:bg-theme-base-700 rounded-l-sm"
              onClick={() => handleDecrementItemQuantity(data)}
            >
              -
            </button>
            <span className="cursor-default py-2 px-3">
              {itemPresentInCart.quantity}
            </span>
            <button
              className="cursor-pointer p-2 hover:bg-theme-base-700 rounded-r-sm"
              onClick={() => handleIncrementItemQuantity(data)}
            >
              +
            </button>
          </div>
        ) : (
          <button
            onClick={() => handleAddItemtoCart(data)}
            className="btn-primary bg-theme-base-800 px-7 rounded-sm uppercase absolute bottom-[-15%] left-[25%]"
          >
            Add
          </button>
        )}
      </div>
    </div>
  );
};

export default MenuItemCard;
