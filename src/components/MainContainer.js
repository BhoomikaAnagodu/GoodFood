import React from "react";
import Header from "./Header";
import RestaurantContainer from "./RestaurantContainer";

const MainContainer = () => {
  return (
    <div className="main-container">
      <Header />
      <RestaurantContainer />
    </div>
  );
};

export default MainContainer;
