import React from "react";
import Home from "../../assets/home.svg";
import Account from "../../assets/account.svg";
import Cart from "../../assets/cart.svg";
import { APP_LOGO } from "../utils/constants";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="shadow-lg fixed z-1 top-0 left-0 right-0 h-20 bg-white">
      <div className="w-4/5 mx-auto flex justify-between items-center">
        <div>
          <NavLink to="/">
            <img src={APP_LOGO} className="w-30 h-20 cursor-pointer" />
          </NavLink>
        </div>
        <div>
          <ul className="flex items-center list-none">
            <NavLink
              to="/"
              className={({ isActive }) =>
                [
                  isActive
                    ? "text-orange-600 "
                    : "hover:text-orange-600 hover:fill-orange-600",
                  "flex items-center cursor-pointer px-2",
                ].join(" ")
              }
            >
              {({ isActive }) => (
                <>
                  <Home
                    className={`${isActive && "fill-orange-600"} w-6 h-6 pr-1`}
                  />{" "}
                  <span>Home</span>
                </>
              )}
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                [
                  isActive
                    ? "text-orange-600 "
                    : "hover:text-orange-600 hover:fill-orange-600",
                  "cursor-pointer px-2",
                ].join(" ")
              }
            >
              <span>About Us</span>
            </NavLink>
            <li className="flex items-center cursor-pointer px-2 hover:text-orange-600 hover:fill-orange-600">
              <Account className="w-6 h-6 pr-1" /> <span>Account</span>
            </li>
            <li className="flex items-center cursor-pointer px-2 hover:text-orange-600 hover:fill-orange-600">
              <Cart className="w-6 h-6 pr-1" /> <span>Cart</span>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
