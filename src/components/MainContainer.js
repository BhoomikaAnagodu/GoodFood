import React from "react";
import Header from "./Header";
import RestaurantContainer from "./RestaurantContainer";
import useMainContainer from "../hooks/useMainContainer";

const MainContainer = () => {
  const {
    filteredRestList,
    filterTopResturants,
    searchQuery,
    handleSearchInputChange,
  } = useMainContainer();

  return (
    <div className="main-container">
      <Header
        searchQuery={searchQuery}
        handleSearchInputChange={handleSearchInputChange}
      />
      <RestaurantContainer
        filteredRestList={filteredRestList}
        filterTopResturants={filterTopResturants}
      />
    </div>
  );
};

export default MainContainer;
