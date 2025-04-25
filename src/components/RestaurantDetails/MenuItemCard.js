import { IMG_CDN_URL } from "../../utils/constants";
import NonVeg from "../../../assets/non-veg.svg";
import Veg from "../../../assets/veg.svg";
import RatingStar from "../../../assets/star.svg";
import Tag from "../../../assets/tag.svg";

const MenuItemCard = ({ data, style }) => {
  const {
    name,
    price,
    finalPrice,
    description,
    ratings,
    imageId,
    itemAttribute,
  } = data;
  return (
    <div className={`flex justify-between px-0 pt-4 ${style}`}>
      <div className="w-2/3">
        {itemAttribute?.vegClassifier === "NONVEG" && (
          <NonVeg className="w-5 h-5" />
        )}
        {itemAttribute?.vegClassifier === "VEG" && <Veg className="w-5 h-5" />}
        <p className="font-semibold text-base pt-2">{name}</p>
        <p className="flex items-center mb-2">
          {price && (
            <span
              className={
                finalPrice ? "line-through pr-2 text-stone-400" : "final-price"
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
        </p>
        {ratings?.aggregatedRating?.rating && (
          <p className="text-sm flex">
            <span className="text-sm flex items-center text-[#168B3E] font-semibold">
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
      <div>
        <img
          src={IMG_CDN_URL + imageId}
          className="w-39 h-36 rounded-lg object-cover ml-2"
        />
      </div>
    </div>
  );
};

export default MenuItemCard;
