import React from "react";
import { IMG_CDN_URL } from "../../utils/constants";
import RatingStar from "../../../assets/star.svg";
import Tag from "../../../assets/tag.svg";
import CollapseArrow from "../../../assets/collapse-arrow.svg";
import NonVeg from "../../../assets/non-veg.svg";
import Veg from "../../../assets/veg.svg";

const MenuItemCard = ({ data }) => {
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
    <div className="menu-item-card">
      <div className="menu-item-details">
        {itemAttribute?.vegClassifier === "NONVEG" && (
          <NonVeg className="non-veg-icon" />
        )}
        {itemAttribute?.vegClassifier === "VEG" && <Veg className="veg-icon" />}
        <p className="menu-item-name">{name}</p>
        <p className="menu-item-price">
          {price && (
            <span className={finalPrice ? "price" : "final-price"}>
              &#8377;{price / 100}
            </span>
          )}
          {finalPrice && (
            <>
              <span className="final-price">&#8377;{finalPrice / 100}</span>
              <Tag className="price-tag" />
            </>
          )}
        </p>
        {ratings?.aggregatedRating?.rating && (
          <p className="menu-item-review">
            <span className="rating">
              <RatingStar className="rating-star" />
              {ratings?.aggregatedRating?.rating}
            </span>
            <span className="rating-count">
              ({ratings?.aggregatedRating?.ratingCountV2})
            </span>
          </p>
        )}
        <p className="menu-item-description">{description}</p>
      </div>
      <div>
        <img src={IMG_CDN_URL + imageId} className="menu-item-img" />
      </div>
    </div>
  );
};

const RestaurantMenu = ({ data }) => {
  const menulist = data.slice(1);
  return (
    <div className="rest-menu">
      <p className="rest-menu-title">------- Menu -------</p>

      {menulist.map((list, index) => {
        return (
          <div key={`menu_list_${index}`}>
            {list?.card?.card?.itemCards && (
              <>
                <details key={`categories_${list?.card?.card?.title}`}>
                  <summary>
                    <h2 className="menu-section-heading">
                      {list?.card?.card?.title}
                    </h2>
                    <CollapseArrow className="collapse-arrow" />
                  </summary>
                  <div>
                    {list?.card?.card?.itemCards.map((item) => {
                      return (
                        <MenuItemCard
                          key={item?.card?.info?.id}
                          data={item?.card?.info}
                        />
                      );
                    })}
                  </div>
                </details>
              </>
            )}
            {list?.card?.card?.categories && (
              <>
                <h2 className="menu-section-heading">
                  {list?.card?.card?.title}
                </h2>
                {list?.card?.card?.categories.map((catList) => {
                  return (
                    <details key={`categories_${catList?.title}`}>
                      <summary>
                        <h3 className="menu-sub-section-heading">
                          {catList?.title}
                        </h3>
                        <CollapseArrow className="collapse-arrow" />
                      </summary>
                      <div>
                        {catList?.itemCards.map((item) => {
                          return (
                            <MenuItemCard
                              key={item?.card?.info?.id}
                              data={item?.card?.info}
                            />
                          );
                        })}
                      </div>
                    </details>
                  );
                })}
              </>
            )}
            {(list?.card?.card?.itemCards || list?.card?.card?.categories) && (
              <div className="menu-section-footer"></div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
