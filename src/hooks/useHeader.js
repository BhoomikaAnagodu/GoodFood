import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export const useHeader = () => {
  // Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);
  const cartItemsCount = cartItems.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.quantity;
  }, 0);
  const location = useLocation();
  const [headerColor, setHeaderColor] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef(null);

  const changeHeaderColor = () => {
    if (
      document.scrollingElement.scrollTop <= 50 &&
      location?.pathname === "/"
    ) {
      setHeaderColor(false);
    } else {
      setHeaderColor(true);
    }
  };

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

  useEffect(() => {
    window.addEventListener("scroll", changeHeaderColor, true);
    return () => {
      window.removeEventListener("scroll", changeHeaderColor);
    };
  }, []);

  return {
    cartItemsCount,
    location,
    headerColor,
    toggleMenu,
    openMenu,
    menuRef,
  };
};
