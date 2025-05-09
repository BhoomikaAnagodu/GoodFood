import React from "react";
import { NavLink } from "react-router-dom";
import useHeader from "../hooks/useHeader";
import LOGO from "../../assets/icons/logo.svg";

const Header = () => {
  const { cartItemsCount, location, headerColor } = useHeader();

  return (
    <header
      className={`fixed z-1 top-0 left-0 right-0 h-20 ${
        location?.pathname === "/"
          ? headerColor
            ? "bg-zinc-100 opacity-95"
            : "bg-transparent"
          : "bg-white"
      }`}
    >
      <div className="w-[90%] md:w-[88%] lg:w-[85%] xl:w-4/5 mx-auto flex justify-between h-20 items-center">
        <div>
          <NavLink to="/">
            <div className="flex items-center ">
              <LOGO className="w-8 h-8 lg:w-12 lg:h-12 cursor-pointer" />
              <h3 className="text-base md:text-lg xl:text-xl mx-1 font-semibold text-stone-900">
                Good
                <span className="ml-0.5 font-bold text-theme-orange">Food</span>
              </h3>
            </div>
          </NavLink>
        </div>
        <div className="mr-10">
          <ul className="hidden md:visible md:flex items-center list-none">
            <NavLink
              to="/restaurants"
              className={({ isActive }) =>
                [
                  isActive
                    ? ""
                    : "hover:scale-108 transform duration-400 ease-in",
                  "grid cursor-pointer px-4",
                ].join(" ")
              }
            >
              {({ isActive }) => (
                <>
                  <p className="text-lg">Restaurants</p>
                  {isActive && (
                    <span className="w-2/5 border-b-2 border-b-theme-orange"></span>
                  )}
                </>
              )}
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                [
                  isActive
                    ? ""
                    : "hover:scale-108 transform duration-400 ease-in",
                  "grid cursor-pointer px-4",
                ].join(" ")
              }
            >
              {({ isActive }) => (
                <>
                  <p className="text-lg">About</p>
                  {isActive && (
                    <span className="w-2/5 border-b-2 border-b-theme-orange"></span>
                  )}
                </>
              )}
            </NavLink>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                [
                  isActive
                    ? ""
                    : "hover:scale-108 transform duration-400 ease-in",
                  "grid cursor-pointer px-4 relative",
                ].join(" ")
              }
            >
              {({ isActive }) => (
                <>
                  <span className="text-lg">Cart</span>
                  {isActive && (
                    <span className="w-2/5 border-b-2 border-b-theme-orange"></span>
                  )}
                  {cartItemsCount > 0 && (
                    <span className="text-sm absolute top-[-10] right-[-10] opacity-90 bg-theme-orange text-theme-base-50 px-2 py-0.5 rounded-full">
                      {cartItemsCount}
                    </span>
                  )}
                </>
              )}
            </NavLink>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
