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
    setIsTopResFilterEnabled,
  } = useRestaurantPage();

  let cardList =
    searchQuery || isTopResFilterEnabled ? filteredRestList : restList;
  return (
    <div data-automation-id="home-page-container" className="w-full py-5">
      <div className="relative main-container mx-auto bg-white">
        {restList?.length === 0 ? (
          <ShimmerContainer />
        ) : (
          <>
            <div className="fixed top-20 left-0 shadow-top z-110 bg-white py-5 w-full">
              <div className="main-container mx-auto flex items-center justify-end gap-4">
                <div className="flex border-theme-base border-1 rounded-3xl p-1.5">
                  <input
                    type="text"
                    value={searchQuery}
                    placeholder="Cuisines"
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="focus-visible:outline-0 px-2 placeholder:text-theme-base-500 placeholder:font-light placeholder:text-sm"
                  />
                  <Search className="w-5 h-5 mt-0.5 mr-1" />
                </div>
                <button
                  className="btn-primary"
                  data-automation-id="top-resturants-btn"
                  onClick={handleFilterTopRestaurants}
                >
                  Top Resturants
                </button>
              </div>
            </div>
            <div className="my-2">
              {isTopResFilterEnabled && (
                <p
                  className="w-fit flex items-center bg-theme-orange-800 cursor-pointer hover:bg-theme-orange-600 text-sm px-4 py-2 rounded-2xl"
                  onClick={() => setIsTopResFilterEnabled(false)}
                >
                  <span>Top Restaurants</span>
                  <span className="ml-2">x</span>
                </p>
              )}
            </div>
            {cardList?.length > 0 ? (
              <div className="pt-20 py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
