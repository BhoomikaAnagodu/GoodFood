import { NavLink } from "react-router-dom";
import { useHeader } from "../hooks/useHeader";
import LOGO from "../../assets/icons/logo.svg";
import Hamburger_Menu_Icon from "../../assets/icons/hamburger-menu.png";
import { NAV_ITEMS } from "../utils/constants";
import { isMobile } from "../utils/utils";

const Header = () => {
  const {
    cartItemsCount,
    location,
    headerColor,
    toggleMenu,
    openMenu,
    menuRef,
  } = useHeader();

  return (
    <header
      data-testid="header"
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
          <nav aria-label="Main navigation">
            <NavLink to="/" className="flex items-center">
              <LOGO
                className="w-8 h-8 lg:w-12 lg:h-12 cursor-pointer"
                role="img"
                aria-label="GoodFood logo"
              />
              <h3 className="text-base md:text-lg xl:text-xl mx-1 font-semibold text-stone-900">
                Good
                <span className="ml-0.5 font-bold text-theme-orange">Food</span>
              </h3>
            </NavLink>
          </nav>
        </div>
        <div>
          {isMobile() ? (
            <div className="relative" ref={menuRef}>
              <button
                type="button"
                data-testid="toggle-btn"
                aria-label={openMenu ? "Close menu" : "Open menu"}
                className="w-7 md:w-8"
                onClick={toggleMenu}
              >
                <img src={Hamburger_Menu_Icon} alt="Menu" />
              </button>
              {openMenu && (
                <ul
                  data-testid="menu-el"
                  className="absolute right-0 bg-stone-100 shadow-menu rounded-xl w-fit overflow-hidden xxs:my-4 xs:my-4 md:my-6 z-[1100] p-2"
                >
                  {NAV_ITEMS.map((item) => (
                    <li key={item.label}>
                      <NavLink
                        to={`/${item.value}`}
                        className="menu-link block px-2"
                      >
                        {({ isActive }) => (
                          <span
                            className={`${
                              isActive
                                ? "border-l-2 border-theme-orange text-theme-orange"
                                : ""
                            }`}
                          >
                            {item.label}
                          </span>
                        )}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ) : (
            <div className="mr-10">
              <nav aria-label="Primary navigation">
                <ul className="hidden md:visible md:flex items-center list-none">
                  {NAV_ITEMS.map((item) => (
                    <li key={item.label} className="px-2">
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
                            <span className="text-lg">{item.label}</span>
                            {isActive && (
                              <span className="w-2/5 border-b-2 border-b-theme-orange"></span>
                            )}
                            {item.label === "Cart" && cartItemsCount > 0 && (
                              <span
                                data-testid="cart-count"
                                className="text-sm absolute top-[-5] right-[-20] opacity-90 bg-theme-orange text-theme-base-50 px-2 py-0.5 rounded-full"
                              >
                                {cartItemsCount}
                              </span>
                            )}
                          </div>
                        )}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
