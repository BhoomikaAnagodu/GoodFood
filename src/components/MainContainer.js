import React from "react";
import Header from "./Header.js";
import { Outlet } from "react-router-dom";

const MainContainer = () => {
  return (
    <div className="w-full relative pt-20 text-base">
      <Header />
      <Outlet />
    </div>
  );
};

export default MainContainer;
