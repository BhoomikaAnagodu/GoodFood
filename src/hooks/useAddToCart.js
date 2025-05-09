import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  clearCart,
  decrementItemQuanity,
  incrementItemQuanity,
} from "../store/cartSlice";

const useAddToCart = ({
  restDetails,
  handleOpenModal,
  handleCloseModal,
  newCartData,
}) => {
  const dispatch = useDispatch();
  const { items, restaurantDetails } = useSelector((store) => store.cart);

  const handleAddItemtoCart = (data) => {
    if (items.length) {
      if (restaurantDetails?.name === restDetails?.name) {
        dispatch(addItem({ item: data, restData: restDetails }));
      } else {
        handleOpenModal(data);
      }
    } else {
      dispatch(addItem({ item: data, restData: restDetails }));
    }
  };

  const handleIncrementItemQuantity = (data) => {
    dispatch(incrementItemQuanity(data));
  };

  const handleDecrementItemQuantity = (data) => {
    dispatch(decrementItemQuanity(data));
  };

  const handleRefreshCart = () => {
    dispatch(clearCart());
    dispatch(addItem({ item: newCartData, restData: restDetails }));
    handleCloseModal();
  };

  return {
    dispatcherFn: {
      handleAddItemtoCart: handleAddItemtoCart,
      handleIncrementItemQuantity: handleIncrementItemQuantity,
      handleDecrementItemQuantity: handleDecrementItemQuantity,
      handleRefreshCart: handleRefreshCart,
    },
  };
};

export default useAddToCart;
