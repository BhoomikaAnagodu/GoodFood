import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import RestaurantPage from "../../components/RestaurantPage";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";

// mock child components that render complex markup
jest.mock("../../components/RestaurantCard", () => () => <div data-testid="card">Card</div>);

// mock the hook
const mockValues = {
  restList: [],
  filteredRestList: [],
  handleFilterTopRestaurants: jest.fn(),
  searchQuery: "",
  setSearchQuery: jest.fn(),
  isTopResFilterEnabled: false,
  setIsTopResFilterEnabled: jest.fn(),
};

jest.mock("../../hooks/useRestaurantPage", () => {
  return jest.fn(() => mockValues);
});

describe("RestaurantPage component", () => {
  beforeEach(() => {
    // reset mocks and default values before each test
    mockValues.restList = [];
    mockValues.filteredRestList = [];
    mockValues.searchQuery = "";
    mockValues.isTopResFilterEnabled = false;
    mockValues.handleFilterTopRestaurants.mockClear();
    mockValues.setSearchQuery.mockClear();
    mockValues.setIsTopResFilterEnabled.mockClear();
  });

  const renderPage = () =>
    render(
      <Router>
        <RestaurantPage />
      </Router>
    );

  test("shows shimmer when restList is empty", () => {
    mockValues.restList = [];
    renderPage();
    // shimmer elements contain the word "shimmer" multiple times
    const shimmerEls = screen.getAllByText(/shimmer/i);
    expect(shimmerEls.length).toBeGreaterThan(0);
  });

  test("renders cards when restList has data", () => {
    mockValues.restList = [
      { info: { id: 1, name: "Test" } },
      { info: { id: 2, name: "Another" } },
    ];
    mockValues.filteredRestList = mockValues.restList;
    renderPage();
    const cards = screen.getAllByTestId("card");
    expect(cards).toHaveLength(2);
  });

  test("search input calls setSearchQuery", () => {
    mockValues.restList = [ { info: { id: 1, name: "Test" } } ];
    mockValues.filteredRestList = mockValues.restList;
    renderPage();
    const input = screen.getByPlaceholderText(/Cuisines/i);
    fireEvent.change(input, { target: { value: "pizza" } });
    expect(mockValues.setSearchQuery).toHaveBeenCalledWith("pizza");
  });

  test("top restaurants button triggers handler", () => {
    mockValues.restList = [ { info: { id: 1, name: "Test" } } ];
    mockValues.filteredRestList = mockValues.restList;
    renderPage();
    const btn = screen.getByRole("button", { name: /Top Restaurants/ });
    fireEvent.click(btn);
    expect(mockValues.handleFilterTopRestaurants).toHaveBeenCalled();
  });

  test("shows no results message when filtered list empty and search applied", () => {
    mockValues.restList = [{ info: { id: 1, name: "Test" } }];
    mockValues.filteredRestList = [];
    mockValues.searchQuery = "pizza";
    render(<RestaurantPage />);
    expect(screen.getByText(/No Search Result Found/i)).toBeInTheDocument();
  });

  test("displays top restaurants pill when filter enabled", () => {
    mockValues.restList = [{ info: { id: 1, name: "Test" } }];
    mockValues.filteredRestList = mockValues.restList;
    mockValues.isTopResFilterEnabled = true;
    renderPage();
    // click the 'x' close icon to dismiss
    const closeIcon = screen.getByText("x");
    fireEvent.click(closeIcon);
    expect(mockValues.setIsTopResFilterEnabled).toHaveBeenCalledWith(false);
  });
});