import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../store/appStore";
import Header from "./Header.js";
import Footer from "./Footer.js";
import { scrollToTop } from "../utils/utils.js";

const MainContainer = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    scrollToTop();
  }, [pathname]);

  return (
    <Provider store={appStore}>
      <div
        className={`w-full relative pt-20 text-base ${
          pathname === "/"
            ? "landingBg h-[70dvh] lg:bg-center lg:h-[100dvh]"
            : ""
        }`}
      >
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
};

export default MainContainer;
