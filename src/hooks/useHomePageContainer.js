import { useEffect, useState } from "react";
import { API_URL } from "../utils/constants";
import { debounce } from "../utils/utils.js";

const useHomePageContainer = () => {
  const [restList, setRestList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRestList, setFilteredRestList] = useState([]);
  const [nextOffset, setNextOffset] = useState("");

  filterTopResturants = () => {
    const filteredList = restList.filter((list) => list.info.avgRating >= 4.5);
    setFilteredRestList(filteredList);
  };

  handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  fetchData = async () => {
    const response = await fetch(API_URL);
    const result = await response.json();
    const resturantsList = result?.data?.cards.find(
      (list) => list?.card?.card?.id === "restaurant_grid_listing_v2"
    );

    setRestList(
      resturantsList.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestList(
      resturantsList.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setNextOffset(result?.data?.pageOffset?.nextOffset);
  };

  fetchMoreData = async () => {
    /**
     * POST API is blocked from swiggy server Hence won't be able to show more resturant list
     */
    // const response = await fetch(
    //   "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/update",
    //   {
    //     method: "POST",
    //     body: JSON.stringify({
    //       lat: 12.9715987,
    //       lng: 77.5945627,
    //       nextOffset: nextOffset,
    //     }),
    //     headers: {
    //       "Access-Control-Allow-Origin": "*",
    //       "Access-Control-Allow-Headers":
    //         "Access-Control-Allow-Headers, Content-Type, Authorization",
    //       "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH",
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );
  };

  const handleScroll = debounce(() => {
    const bottom =
      Math.ceil(window.innerHeight + window.screenY) >=
      document.documentElement.scrollHeight - 200;

    if (bottom) {
      fetchMoreData();
    }
  }, 300);

  handleSearch = debounce(() => {
    const filteredList = restList.filter((list) =>
      list.info.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredRestList(filteredList);
  }, 2000);

  useEffect(() => {
    if (searchQuery !== "") {
      handleSearch();
    }
    if (searchQuery === "") {
      setFilteredRestList(restList);
    }
  }, [searchQuery, restList]);

  useEffect(() => {
    fetchData();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return {
    filteredRestList,
    filterTopResturants,
    searchQuery,
    handleSearchInputChange,
  };
};

export default useHomePageContainer;
