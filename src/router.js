import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import LandingPage from "./components/LandingPage";
import Cart from "./components/Cart";
import ErrorBoundary from "./components/ErrorBoundary";

const RestaurantPage = lazy(() => import("./components/RestaurantPage"));
const About = lazy(() => import("./components/About"));
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
        element: <LandingPage />,
      },
      {
        path: "/restaurants",
        element: <RestaurantPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
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
