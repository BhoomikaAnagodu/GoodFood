import React from "react";
import Search from "../../assets/search.svg";
import Home from "../../assets/home.svg";
import Account from "../../assets/account.svg";
import Cart from "../../assets/cart.svg";
import { APP_LOGO } from "../utils/constants";

const Header = (props) => {
  const { searchQuery, handleSearchInputChange } = props;

  return (
    <header className="header-container">
      <div className="header">
        <div className="logo-container">
          <img src={APP_LOGO} className="logo" />
        </div>
        <div className="nav-items">
          <ul>
            <li className="search-grid">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearchInputChange(e)}
                className="search-input"
              />
              <Search className="search-icon" />
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
