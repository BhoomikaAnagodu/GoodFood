import { useEffect, useState } from "react";
import { API_URL } from "../utils/constants";

const useMainContainer = () => {
  const [restList, setRestList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRestList, setFilteredRestList] = useState([]);

  filterTopResturants = () => {
    const filteredList = restList.filter((list) => list.info.avgRating >= 4.5);
    setFilteredRestList(filteredList);
  };

  handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  fetchData = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();
    setRestList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  useEffect(() => {
    if (searchQuery !== "") {
      const handleFilterOnSearch = setTimeout(() => {
        const filteredList = restList.filter((list) =>
          list.info.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        setFilteredRestList(filteredList);
      }, 2000);

      return () => clearTimeout(handleFilterOnSearch);
    }
    if (searchQuery === "") {
      setFilteredRestList(restList);
    }
  }, [searchQuery, restList]);

  useEffect(() => {
    fetchData();
  }, []);

  return {
    filteredRestList,
    filterTopResturants,
    searchQuery,
    handleSearchInputChange,
  };
};

export default useMainContainer;
