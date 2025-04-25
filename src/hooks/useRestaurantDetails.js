import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";

const useRestaurantDetails = () => {
  const { restId } = useParams();
  const [restData, setRestData] = useState();
  const [showMenu, setShowMenu] = useState(null);

  useEffect(() => {
    fetchResturantData();
  }, []);

  const fetchResturantData = async () => {
    const response = await fetch(MENU_API_URL + restId);
    const data = await response.json();
    setRestData(data?.data?.cards);
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

  return {
    restData,
    restaurantName,
    restaurantPopupCardData,
    restaurantMenu,
    showMenu,
    setShowMenu,
  };
};

export default useRestaurantDetails;
