import React from "react";
import Home from "../../assets/home.svg";
import Account from "../../assets/account.svg";
import Cart from "../../assets/cart.svg";
import { APP_LOGO } from "../utils/constants";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header-container">
      <div className="header">
        <div className="logo-container">
          <NavLink to="/">
            <img src={APP_LOGO} className="logo" />
          </NavLink>
        </div>
        <div className="nav-items">
          <ul>
            <NavLink
              to="/"
              className={({ isActive }) =>
                [isActive ? "active-nav-list" : "nav-list"].join(" ")
              }
            >
              <Home className="nav-icon" /> <span>Home</span>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                [isActive ? "active-nav-list" : "nav-list"].join(" ")
              }
            >
              <span>About Us</span>
            </NavLink>
            <li className="nav-list">
              <Account className="nav-icon" /> <span>Account</span>
            </li>
            <li className="nav-list">
              <Cart className="nav-icon" /> <span>Cart</span>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default Header;
