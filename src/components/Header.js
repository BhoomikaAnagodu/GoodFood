import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import useHeader from "../hooks/useHeader";
import LOGO from "../../assets/icons/logo.svg";
import Hamburger_Menu_Icon from "../../assets/icons/hamburger-menu.png";
import { NAV_ITEMS } from "../utils/constants";
import { isMobile } from "../utils/utils";

const Header = () => {
  const { cartItemsCount, location, headerColor } = useHeader();
  const [openMenu, setOpenMenu] = useState(false);

  const menuRef = useRef(null);

  const toggleMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        openMenu &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setOpenMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openMenu]);

  return (
    <header
      className={`fixed z-110 top-0 left-0 right-0 h-15 lg:h-20 ${
        location?.pathname === "/"
          ? headerColor
            ? "bg-zinc-100 opacity-95"
            : "bg-transparent"
          : "bg-white shadow-xs"
      }`}
    >
      <div className="main-container mx-auto flex justify-between h-15 lg:h-20 items-center">
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
        <div>
          {isMobile ? (
            <div className="relative" ref={menuRef}>
              <div className="w-7 md:w-8 cursor-pointer" onClick={toggleMenu}>
                <img src={Hamburger_Menu_Icon} alt="hamburger menu icon" />
              </div>
              {openMenu && (
                <ul className="absolute right-0 bg-stone-100 shadow-menu rounded-xl w-fit overflow-hidden xxs:my-4 xs:my-4 md:my-6 z-[1100] p-2">
                  {NAV_ITEMS.map((item) => (
                    <NavLink
                      to={`/${item.value}`}
                      key={item.label}
                      className="menu-link cursor-pointer"
                    >
                      {({ isActive }) => (
                        <p
                          className={`${
                            isActive
                              ? "border-l-2 border-theme-orange text-theme-orange"
                              : ""
                          } px-2`}
                        >
                          {item.label}
                        </p>
                      )}
                    </NavLink>
                  ))}
                </ul>
              )}
            </div>
          ) : (
            <div className="mr-10">
              <ul className="hidden md:visible md:flex items-center list-none">
                {NAV_ITEMS.map((item) => (
                  <NavLink
                    to={`/${item.value}`}
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
                      <div className="relative">
                        <p className="text-lg">{item.label}</p>
                        {isActive && (
                          <span className="w-2/5 border-b-2 border-b-theme-orange"></span>
                        )}
                        {item.label === "Cart" && cartItemsCount > 0 && (
                          <span className="text-sm absolute top-[-5] right-[-20] opacity-90 bg-theme-orange text-theme-base-50 px-2 py-0.5 rounded-full">
                            {cartItemsCount}
                          </span>
                        )}
                      </div>
                    )}
                  </NavLink>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
