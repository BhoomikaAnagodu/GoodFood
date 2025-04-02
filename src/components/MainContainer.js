import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const MainContainer = () => {
  return (
    <div className="main-container">
      <Header />
      <Outlet />
    </div>
  );
};

export default MainContainer;
