import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";
import RESTURANT_DETAILS_MOCK from "../utils/mock-data/restaurant-details";

const useRestaurantDetails = () => {
  const { restId } = useParams();
  const [restData, setRestData] = useState();
  const [showMenu, setShowMenu] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [newCartData, setNewCartData] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    fetchResturantData();
  }, []);

  const fetchResturantData = async () => {
    try {
      const response = await fetch(MENU_API_URL + restId);
      if (response?.status === 200) {
        const data = await response.json();
        setRestData(data?.data?.cards);
      } else {
        const data =
          Object.values(RESTURANT_DETAILS_MOCK).find(
            (item) => item.id === restId
          ) || Object.values(RESTURANT_DETAILS_MOCK)[0];
        const is_mock_data_found = Object.values(
          RESTURANT_DETAILS_MOCK
        ).findIndex((item) => item.id === restId);
        setShowAlert(is_mock_data_found === -1);
        setRestData(data?.cards);
      }
    } catch (err) {
      console.log("response error--", err);
    }
  };

  const restaurantName = restData?.find((list) => list?.card?.card?.text)?.card
    ?.card?.text;

  const restaurantPopupCardData = restData?.find(
    (list) => list?.card?.card?.info
  )?.card?.card?.info;

  const restaurantMenu = restData
    ?.find((list) => list?.groupedCard?.cardGroupMap)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((menuList) =>
      menuList?.card?.card?.["@type"].includes("ItemCategory")
    );

  const handleCloseModal = () => {
    setNewCartData(null);
    setOpenModal(false);
  };

  const handleOpenModal = (data) => {
    setNewCartData(data);
    setOpenModal(true);
  };

  return {
    restData,
    restaurantName,
    restaurantPopupCardData,
    restaurantMenu,
    showMenu,
    setShowMenu,
    openModal,
    handleCloseModal,
    handleOpenModal,
    newCartData,
    showAlert,
  };
};

export default useRestaurantDetails;
