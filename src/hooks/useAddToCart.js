import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  clearCart,
  decrementItemQuantity,
  incrementItemQuantity,
} from "../store/cartSlice";

const useAddToCart = ({
  restDetails,
  handleOpenModal,
  handleCloseModal,
  newCartData,
}) => {
  const dispatch = useDispatch();
  const { items, restaurantDetails } = useSelector((store) => store.cart);

  const handleAddItemToCart = useCallback(
    (data) => {
      if (items.length) {
        if (restaurantDetails?.name === restDetails?.name) {
          dispatch(addItem({ item: data, restData: restDetails }));
        } else {
          handleOpenModal(data);
        }
      } else {
        dispatch(addItem({ item: data, restData: restDetails }));
      }
    },
    [dispatch, items, restaurantDetails, restDetails, handleOpenModal]
  );

  const handleIncrementItemQuantity = useCallback(
    (data) => dispatch(incrementItemQuantity(data)),
    [dispatch]
  );

  const handleDecrementItemQuantity = useCallback(
    (data) => dispatch(decrementItemQuantity(data)),
    [dispatch]
  );

  const handleRefreshCart = useCallback(() => {
    // validate newCartData shape before replacing cart
    if (!newCartData || typeof newCartData !== "object" || !newCartData.id) {
      console.warn("handleRefreshCart: invalid newCartData, aborting refresh", newCartData);
      return;
    }

    dispatch(clearCart());
    dispatch(addItem({ item: newCartData, restData: restDetails }));
    if (typeof handleCloseModal === "function") handleCloseModal();
  }, [dispatch, newCartData, restDetails, handleCloseModal]);

  return {
    handleAddItemToCart,
    handleIncrementItemQuantity,
    handleDecrementItemQuantity,
    handleRefreshCart,
  };
};

export default useAddToCart;
