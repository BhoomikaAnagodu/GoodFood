import React from "react";
import Search from "../../assets/search.svg";
import Home from "../../assets/home.svg";
import Account from "../../assets/account.svg";
import Cart from "../../assets/cart.svg";
import { APP_LOGO } from "../utils/constants";

const Header = () => {
  return (
    <header className="header-container">
      <div className="header">
        <div className="logo-container">
          <img src={APP_LOGO} className="logo" />
        </div>
        <div className="nav-items">
          <ul>
            <li className="nav-list">
              <Search className="nav-icon" /> <span>Search</span>
            </li>
            <li className="nav-list">
              <Home className="nav-icon" /> <span>Home</span>
            </li>
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
