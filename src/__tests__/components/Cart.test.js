import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../../store/cartSlice";
import { BrowserRouter as Router } from "react-router-dom";
import Cart from "../../components/Cart";
import "@testing-library/jest-dom";

describe("Cart component", () => {
  const mockRestaurantDetails = {
    name: "Pizza Hub",
    areaName: "Downtown",
    cloudinaryImageId: "test-image-id",
  };

  const mockCartItems = [
    {
      id: 1,
      name: "Margherita Pizza",
      quantity: 2,
      finalPrice: 30000, // 300.00 in rupees
    },
    {
      id: 2,
      name: "Garlic Bread",
      quantity: 1,
      price: 10000, // 100.00 in rupees
    },
  ];

  const createStoreWithCart = (items = [], restaurantDetails = {}) =>
    configureStore({
      reducer: { cart: cartReducer },
      preloadedState: {
        cart: {
          items,
          restaurantDetails,
        },
      },
    });

  test("displays empty cart message when no items", () => {
    const store = createStoreWithCart([], mockRestaurantDetails);

    render(
      <Provider store={store}>
        <Router>
          <Cart />
        </Router>
      </Provider>,
    );

    expect(screen.getByText("Your Cart is Empty")).toBeInTheDocument();
    expect(
      screen.getByText(/Head to the restaurants page/i),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Visit Restaurants/i }),
    ).toBeInTheDocument();
  });

  test("displays cart items with restaurant details", () => {
    const store = createStoreWithCart(mockCartItems, mockRestaurantDetails);

    render(
      <Provider store={store}>
        <Router>
          <Cart />
        </Router>
      </Provider>,
    );

    expect(screen.getByText("Pizza Hub")).toBeInTheDocument();
    expect(screen.getByText("Downtown")).toBeInTheDocument();
    expect(screen.getByText("Margherita Pizza")).toBeInTheDocument();
    expect(screen.getByText("Garlic Bread")).toBeInTheDocument();
  });

  test("displays increment and decrement buttons for each item", () => {
    const store = createStoreWithCart(mockCartItems, mockRestaurantDetails);

    render(
      <Provider store={store}>
        <Router>
          <Cart />
        </Router>
      </Provider>,
    );

    const plusButtons = screen.getAllByRole("button", { name: "+" });
    const minusButtons = screen.getAllByRole("button", { name: "-" });

    expect(plusButtons).toHaveLength(mockCartItems.length);
    expect(minusButtons).toHaveLength(mockCartItems.length);
  });

  test("displays bill details with item total and delivery fee", () => {
    const store = createStoreWithCart(mockCartItems, mockRestaurantDetails);

    render(
      <Provider store={store}>
        <Router>
          <Cart />
        </Router>
      </Provider>,
    );

    expect(screen.getByText("Bill Details")).toBeInTheDocument();
    expect(screen.getByText(/Item Total/)).toBeInTheDocument();
    const deliveryFeeElements = screen.queryAllByText(/Delivery Fee/);
    expect(deliveryFeeElements.length).toBeGreaterThan(0);
    expect(screen.getByText("TO PAY")).toBeInTheDocument();
  });

  test("displays order review section when items exist", () => {
    const store = createStoreWithCart(mockCartItems, mockRestaurantDetails);

    render(
      <Provider store={store}>
        <Router>
          <Cart />
        </Router>
      </Provider>,
    );

    expect(
      screen.getByText(/Review your order and address details/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /Please ensure your address and order details are correct/i,
      ),
    ).toBeInTheDocument();
  });

  test("displays items with variantsV2 pricing models", () => {
    const itemWithVariants = {
      id: 3,
      name: "Pizza Variant",
      quantity: 1,
      variantsV2: {
        pricingModels: [{ price: 20000 }, { price: 25000 }, { price: 15000 }],
      },
    };

    const store = createStoreWithCart(
      [itemWithVariants],
      mockRestaurantDetails,
    );

    render(
      <Provider store={store}>
        <Router>
          <Cart />
        </Router>
      </Provider>,
    );

    expect(screen.getByText("Pizza Variant")).toBeInTheDocument();
    expect(screen.getByText("Bill Details")).toBeInTheDocument();
  });

  test("renders cart layout correctly", () => {
    const store = createStoreWithCart(mockCartItems, mockRestaurantDetails);

    render(
      <Provider store={store}>
        <Router>
          <Cart />
        </Router>
      </Provider>,
    );

    // Check that the main cart structure is rendered
    expect(screen.getByText("Pizza Hub")).toBeInTheDocument();
    expect(screen.getByText("Bill Details")).toBeInTheDocument();
    expect(screen.getByText("Item Total")).toBeInTheDocument();
  });

  test("shows empty cart with link to restaurants when no items in store", () => {
    const store = createStoreWithCart([], {});

    const { container } = render(
      <Provider store={store}>
        <Router>
          <Cart />
        </Router>
      </Provider>,
    );

    expect(screen.getByText("Your Cart is Empty")).toBeInTheDocument();
    const link = screen.getByRole("link", { name: /Visit Restaurants/i });
    expect(link.getAttribute("href")).toBe("/restaurants");
  });

  test("displays correct number of items", () => {
    const store = createStoreWithCart(mockCartItems, mockRestaurantDetails);

    render(
      <Provider store={store}>
        <Router>
          <Cart />
        </Router>
      </Provider>,
    );

    expect(screen.getByText("Margherita Pizza")).toBeInTheDocument();
    expect(screen.getByText("Garlic Bread")).toBeInTheDocument();
  });

  test("displays delivery fee information", () => {
    const store = createStoreWithCart(mockCartItems, mockRestaurantDetails);

    render(
      <Provider store={store}>
        <Router>
          <Cart />
        </Router>
      </Provider>,
    );

    const deliveryFeeElements = screen.queryAllByText(/Delivery Fee/);
    expect(deliveryFeeElements.length).toBeGreaterThan(0);
    expect(screen.getByText(/1.3 kms/)).toBeInTheDocument();
    const standardFeeElements = screen.queryAllByText(/Standard Fee/);
    expect(standardFeeElements.length).toBeGreaterThan(0);
  });
});
