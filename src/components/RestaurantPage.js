import React from "react";
import { NavLink } from "react-router-dom";

import RestaurantCard from "./RestaurantCard";
import ShimmerContainer from "./ShimmerContainer";
import useRestaurantPage from "../hooks/useRestaurantPage";

import Search from "../../assets/icons/search.svg";

const RestaurantPage = () => {
  const {
    restList,
    filteredRestList,
    handleFilterTopRestaurants,
    searchQuery,
    setSearchQuery,
    isTopResFilterEnabled,
  } = useRestaurantPage();

  let cardList =
    searchQuery || isTopResFilterEnabled ? filteredRestList : restList;
  return (
    <div data-automation-id="home-page-container" className="w-full py-5">
      <div className="w-[90%] md:w-[88%] lg:w-[85%] xl:w-4/5 mx-auto bg-white">
        {restList?.length === 0 ? (
          <ShimmerContainer />
        ) : (
          <>
            <div className="flex items-center">
              <button
                className="btn-primary mr-5"
                data-automation-id="top-resturants-btn"
                onClick={handleFilterTopRestaurants}
              >
                Top Resturants
              </button>
              <div className="flex border-theme-base border-1 rounded-3xl p-1">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="focus-visible:outline-0 px-2"
                />
                <Search className="w-5 h-5 mt-0.5 mr-1" />
              </div>
            </div>
            {cardList?.length > 0 ? (
              <div className="py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {cardList?.length > 0 &&
                  cardList?.map((data) => (
                    <NavLink
                      to={`/resturant/${data.info.id}`}
                      className="cursor-pointer transition-primary hover:scale-95"
                      key={data.info.id}
                    >
                      <RestaurantCard resData={data} />
                    </NavLink>
                  ))}
              </div>
            ) : (
              <div className="mx-auto h-150 flex items-center justify-center w-1/2">
                <h2 className="text-2xl">No Search Result Found</h2>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default RestaurantPage;
