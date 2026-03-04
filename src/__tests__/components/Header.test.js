import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../../store/cartSlice";
import { MemoryRouter } from "react-router-dom";
import Header from "../../components/Header";
import "@testing-library/jest-dom";

describe("Header component", () => {
  let store;

  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false, // Default to desktop
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  beforeEach(() => {
    store = configureStore({
      reducer: { cart: cartReducer },
    });
  });

  test("renders Header on desktop", () => {
    window.matchMedia.mockReturnValue({
      matches: false, // Desktop
      media: "(max-width: 1023px)",
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>,
    );

    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: "GoodFood logo" }),
    ).toBeInTheDocument();
  });

  test("renders cart count when items in cart on desktop", () => {
    store = configureStore({
      reducer: { cart: cartReducer },
      preloadedState: {
        cart: {
          items: [
            { id: 1, name: "Item 1", quantity: 2, price: 10 },
            { id: 2, name: "Item 2", quantity: 1, price: 20 },
          ],
        },
      },
    });

    window.matchMedia.mockReturnValue({
      matches: false, // Desktop
      media: "(max-width: 1023px)",
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>,
    );

    expect(screen.getByTestId("cart-count")).toHaveTextContent("3");
  });

  test("renders mobile menu and toggles", () => {
    window.matchMedia.mockReturnValue({
      matches: true, // Mobile
      media: "(max-width: 1023px)",
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>,
    );

    expect(screen.getByTestId("toggle-btn")).toBeInTheDocument();
    expect(screen.queryByTestId("menu-el")).not.toBeInTheDocument();

    fireEvent.click(screen.getByTestId("toggle-btn"));

    expect(screen.getByTestId("menu-el")).toBeInTheDocument();

    fireEvent.click(screen.getByTestId("toggle-btn"));

    expect(screen.queryByTestId("menu-el")).not.toBeInTheDocument();
  });
});
