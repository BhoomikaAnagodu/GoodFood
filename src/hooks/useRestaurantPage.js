import { useEffect, useState } from "react";
// import { API_URL } from "../utils/constants";
import { debounce } from "../utils/utils.js";
import { restaurant_list } from "../utils/restaurant-list.js";

const useRestaurantPage = () => {
  const [restList, setRestList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRestList, setFilteredRestList] = useState([]);
  // const [nextOffset, setNextOffset] = useState("");
  const [page, setPage] = useState(0);
  const [isTopResFilterEnabled, setIsTopResFilterEnabled] = useState(false);

  const itemsPerPage = 8;

  /**
   * Function to fetch restaurant list from API.
   * as API is blocked from server, using mock data in local to fetch more restaurant list .
   */
  const fetchData = async () => {
    // const response = await fetch(API_URL);
    // const result = await response.json();
    // const resturantsList = result?.data?.cards.find(
    //   (list) => list?.card?.card?.id === "restaurant_grid_listing_v2"
    // );
    // setRestList(
    //   resturantsList?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
    // setFilteredRestList(
    //   resturantsList?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
    // setNextOffset(result?.data?.pageOffset?.nextOffset);
    setTimeout(() => {
      setRestList(restaurant_list.slice(0, itemsPerPage));
    }, 1000);
  };

  /**
   * Function to fetch more restaurant list from API.
   * API is blocked from server, Hence loading mock data on scroll
   */
  const fetchMoreData = async () => {
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
    setRestList((prev) => [
      ...prev,
      ...restaurant_list.slice(prev.length, prev.length + itemsPerPage),
    ]);
  };

  /* Function to increment page count if the user reaches the bottom of the webpage */
  const handleScroll = debounce(() => {
    const bottom =
      window.scrollY + window.innerHeight >=
      document.documentElement.scrollHeight - 300;

    if (bottom) {
      setPage((prev) => prev + 1);
    }
  }, 200);

  /* Function to filter the restaurant list based on search query */
  const handleSearch = debounce(() => {
    const RestList = isTopResFilterEnabled ? filteredRestList : restList;
    const filteredList = RestList.filter((list) =>
      list.info.cuisines.some((cuisin) =>
        cuisin.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );

    setFilteredRestList(filteredList);
  }, 200);

  /* Function to filter top rated restaurants */
  const handleFilterTopRestaurants = () => {
    const RestList = searchQuery ? filteredRestList : restList;
    setIsTopResFilterEnabled(true);
    const filteredList = RestList.filter((list) => list.info.avgRating >= 4.5);
    setFilteredRestList(filteredList);
  };

  useEffect(() => {
    if (
      page > 0 &&
      restaurant_list.length > filteredRestList.length &&
      !searchQuery &&
      !isTopResFilterEnabled
    ) {
      fetchMoreData();
    }
  }, [page]);

  useEffect(() => {
    if (!isTopResFilterEnabled && searchQuery !== "") {
      handleSearch();
    }
  }, [isTopResFilterEnabled]);

  useEffect(() => {
    if (searchQuery !== "") {
      handleSearch();
    }
    if (searchQuery === "") {
      setFilteredRestList(restList);
    }
  }, [searchQuery]);

  useEffect(() => {
    fetchData();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return {
    restList,
    filteredRestList,
    handleFilterTopRestaurants,
    searchQuery,
    setSearchQuery,
    isTopResFilterEnabled,
    setIsTopResFilterEnabled,
  };
};

export default useRestaurantPage;
