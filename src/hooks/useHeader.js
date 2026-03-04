import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  HEADER_SCROLL_THRESHOLD,
  HEADER_SCROLL_CAPTURE,
} from "../utils/constants";
import { getScrollTop } from "../utils/utils";

export const useHeader = () => {
  // Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);
  const cartItemsCount = cartItems.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.quantity;
  }, 0);
  const location = useLocation();
  const getInitialHeaderColor = () => {
    if (typeof document === "undefined") return null;
    const scrollTop = getScrollTop();
    if (scrollTop <= HEADER_SCROLL_THRESHOLD && location?.pathname === "/") {
      return false;
    }
    return true;
  };

  const [headerColor, setHeaderColor] = useState(getInitialHeaderColor);
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef(null);

  const changeHeaderColor = () => {
    const scrollTop = getScrollTop();
    if (scrollTop <= HEADER_SCROLL_THRESHOLD && location?.pathname === "/") {
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
    window.addEventListener("scroll", changeHeaderColor, HEADER_SCROLL_CAPTURE);
    return () => {
      window.removeEventListener(
        "scroll",
        changeHeaderColor,
        HEADER_SCROLL_CAPTURE,
      );
    };
  }, [location]);

  return {
    cartItemsCount,
    location,
    headerColor,
    toggleMenu,
    openMenu,
    menuRef,
  };
};
