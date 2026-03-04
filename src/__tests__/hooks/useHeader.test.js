import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../../store/cartSlice";
import { MemoryRouter } from "react-router-dom";
import { HEADER_SCROLL_THRESHOLD } from "../../utils/constants";
import { useHeader } from "../../hooks/useHeader";
import { isMobile } from "../../utils/utils";
import "@testing-library/jest-dom";

// Test component that mimics Header component's conditional rendering
const TestComp = () => {
  const { cartItemsCount, headerColor, toggleMenu, openMenu, menuRef } =
    useHeader();

  return (
    <div>
      {isMobile() ? (
        // Mobile view: hamburger menu
        <div>
          <button onClick={toggleMenu} data-testid="toggle-btn">
            Menu
          </button>
          <div
            ref={menuRef}
            data-testid="menu-el"
            style={{ display: openMenu ? "block" : "none" }}
          >
            Mobile Menu
          </div>
        </div>
      ) : (
        // Desktop view: nav items
        <nav>
          <a href="/">Home</a>
          <a href="/cart" data-testid="cart-link">
            Cart
            {cartItemsCount > 0 && (
              <span data-testid="cart-count">{cartItemsCount}</span>
            )}
          </a>
        </nav>
      )}
      <div data-testid="header-color">{String(headerColor)}</div>
    </div>
  );
};

describe("useHeader hook", () => {
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn(),
    });
  });

  afterEach(() => {
    window.matchMedia.mockReset();
  });

  const createStoreWith = (preloadedState) =>
    configureStore({
      reducer: { cart: cartReducer },
      preloadedState: { cart: preloadedState },
    });

  test("mobile view: toggles menu and responds to scroll", () => {
    // Mock mobile view
    window.matchMedia.mockReturnValue({
      matches: true,
      media: "(max-width: 1023px)",
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    });

    // Reset scroll position
    document.documentElement.scrollTop = 0;

    const store = createStoreWith({
      items: [{ id: "a", quantity: 2 }],
      restaurantDetails: {},
    });

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/"]}>
          <TestComp />
        </MemoryRouter>
      </Provider>,
    );

    // headerColor should be false on top
    expect(screen.getByTestId("header-color").textContent).toBe("false");

    // simulate scroll past threshold
    act(() => {
      document.documentElement.scrollTop = HEADER_SCROLL_THRESHOLD + 10;
      window.dispatchEvent(new Event("scroll"));
    });

    expect(screen.getByTestId("header-color").textContent).toBe("true");

    // toggle open menu
    expect(screen.getByTestId("menu-el")).not.toBeVisible();
    fireEvent.click(screen.getByTestId("toggle-btn"));
    expect(screen.getByTestId("menu-el")).toBeVisible();

    // click outside should close menu
    act(() => {
      fireEvent.mouseDown(document.body);
    });

    expect(screen.getByTestId("menu-el")).not.toBeVisible();
  });

  test("desktop view: displays cart count and responds to scroll", () => {
    // Mock desktop view
    window.matchMedia.mockReturnValue({
      matches: false,
      media: "(max-width: 1023px)",
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    });

    // Reset scroll position
    document.documentElement.scrollTop = 0;

    const store = createStoreWith({
      items: [{ id: "a", quantity: 2 }],
      restaurantDetails: {},
    });

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/"]}>
          <TestComp />
        </MemoryRouter>
      </Provider>,
    );

    // cart count should be displayed
    expect(screen.getByTestId("cart-count").textContent).toBe("2");

    // headerColor should be false on top
    expect(screen.getByTestId("header-color").textContent).toBe("false");

    // simulate scroll past threshold
    act(() => {
      document.documentElement.scrollTop = HEADER_SCROLL_THRESHOLD + 10;
      window.dispatchEvent(new Event("scroll"));
    });

    expect(screen.getByTestId("header-color").textContent).toBe("true");

    // no toggle button in desktop
    expect(screen.queryByTestId("toggle-btn")).not.toBeInTheDocument();
  });
});
