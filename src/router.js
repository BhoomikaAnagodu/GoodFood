import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import AboutUs from "./components/AboutUs";
import HomePageContainer from "./components/HomePageContainer";
import ErrorBoundary from "./components/ErrorBoundary";
// import RestaurantDetails from "./components/RestaurantDetails/RestaurantDetails";

const RestaurantDetails = lazy(() =>
  import("./components/RestaurantDetails/RestaurantDetails")
);
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
        element: (
          <Suspense fallback={<h1>Loading</h1>}>
            <RestaurantDetails />
          </Suspense>
        ),
      },
    ],
  },
];

export const appRouter = createBrowserRouter(routes);
