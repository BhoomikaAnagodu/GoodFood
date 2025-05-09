import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const useHeader = () => {
  // Subscribong to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);
  const cartItemsCount = cartItems.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.quantity;
  }, 0);
  const location = useLocation();
  const [headerColor, setHeaderColor] = useState(null);

  const changeHeaderColor = () => {
    if (document.scrollingElement.scrollTop <= 50) {
      setHeaderColor(false);
    } else {
      setHeaderColor(true);
    }
  };

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
  };
};

export default useHeader;
