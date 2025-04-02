import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";

const useRestaurantDetails = () => {
  const { restId } = useParams();
  const [restData, setRestData] = useState();

  useEffect(() => {
    fetchResturantData();
  }, []);

  const fetchResturantData = async () => {
    const response = await fetch(MENU_API_URL + restId);
    const data = await response.json();
    setRestData(data?.data?.cards);
  };
  return { restData };
};

export default useRestaurantDetails;
