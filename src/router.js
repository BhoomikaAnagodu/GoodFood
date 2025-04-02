import { createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import AboutUs from "./components/AboutUs";
import HomePageContainer from "./components/HomePageContainer";
import ErrorBoundary from "./components/ErrorBoundary";
import RestaurantDetails from "./components/RestaurantDetails/RestaurantDetails";

const routes = [
  {
    path: "/",
    element: <MainContainer />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "/",
        element: <HomePageContainer />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/resturant/:restId",
        element: <RestaurantDetails />,
      },
    ],
  },
];

export const appRouter = createBrowserRouter(routes);
