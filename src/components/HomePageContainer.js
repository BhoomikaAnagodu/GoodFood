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

  return (
    <div className="res-main-container">
      <div className="res-container">
        {filteredRestList?.length === 0 ? (
          <ShimmerContainer />
        ) : (
          <>
            <div className="filter-section">
              <button
                className="top-resturant-fltr"
                onClick={filterTopResturants}
              >
                Top Resturants
              </button>
              <div className="search-grid">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => handleSearchInputChange(e)}
                  className="search-input"
                />
                <Search className="search-icon" />
              </div>
            </div>
            <div className="res-grid">
              {filteredRestList?.map((data) => (
                <NavLink
                  to={`/resturant/${data.info.id}`}
                  className="res-card"
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
