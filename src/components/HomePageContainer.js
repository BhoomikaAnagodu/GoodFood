import React from "react";
import { NavLink } from "react-router-dom";

import RestaurantCard from "./RestaurantCard";
import ShimmerContainer from "./ShimmerContainer";
import useHomePageContainer from "../hooks/useHomePageContainer";

import Search from "../../assets/search.svg";

const HomePageContainer = () => {
  const {
    filteredRestList,
    filterTopResturants,
    searchQuery,
    handleSearchInputChange,
  } = useHomePageContainer();

  console.log("filteredRestList", filteredRestList);

  return (
    <div className="w-full py-5">
      <div className="w-4/5 mx-auto bg-white">
        {filteredRestList?.length === 0 ? (
          <ShimmerContainer />
        ) : (
          <>
            <div className="flex items-center">
              <button
                className="btn-primary mr-5"
                onClick={filterTopResturants}
              >
                Top Resturants
              </button>
              <div className="flex border-stone-400 border-1 rounded-3xl p-1">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => handleSearchInputChange(e)}
                  className="focus-visible:outline-0 px-2"
                />
                <Search className="w-5 h-5 mt-0.5 mr-1" />
              </div>
            </div>
            <div className="py-5 flex flex-wrap grid-rows-3 gap-4">
              {filteredRestList?.map((data) => (
                <NavLink
                  to={`/resturant/${data.info.id}`}
                  className="w-70 cursor-pointer transition-primary hover:scale-95"
                  key={data.info.id}
                >
                  <RestaurantCard resData={data} />
                </NavLink>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HomePageContainer;
