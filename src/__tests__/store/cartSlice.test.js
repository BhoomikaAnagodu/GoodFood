import cartReducer, {
  addItem,
  removeItem,
  clearCart,
  incrementItemQuantity,
  decrementItemQuantity,
} from "../../store/cartSlice";

describe("cartSlice reducer", () => {
  const initialState = { restaurantDetails: {}, items: [] };

  test("addItem adds item with quantity 1 and sets restaurantDetails", () => {
    const item = { id: "1", name: "Pizza" };
    const rest = { name: "Resto" };

    const next = cartReducer(initialState, addItem({ item, restData: rest }));

    expect(next.items).toHaveLength(1);
    expect(next.items[0].id).toBe("1");
    expect(next.items[0].quantity).toBe(1);
    expect(next.restaurantDetails).toEqual(rest);
  });

  test("incrementItemQuantity increases quantity", () => {
    const state = {
      restaurantDetails: {},
      items: [{ id: "1", name: "Pizza", quantity: 1 }],
    };

    const next = cartReducer(state, incrementItemQuantity({ id: "1" }));
    expect(next.items[0].quantity).toBe(2);
  });

  test("decrementItemQuantity decreases quantity and removes when becomes 0", () => {
    const state = {
      restaurantDetails: {},
      items: [{ id: "1", name: "Pizza", quantity: 1 }],
    };

    const next = cartReducer(state, decrementItemQuantity({ id: "1" }));
    expect(next.items).toHaveLength(0);
  });

  test("removeItem removes item by id", () => {
    const state = {
      restaurantDetails: {},
      items: [
        { id: "1", name: "Pizza", quantity: 1 },
        { id: "2", name: "Biryani", quantity: 2 },
      ],
    };

    const next = cartReducer(state, removeItem({ id: "1" }));
    expect(next.items).toHaveLength(1);
    expect(next.items[0].id).toBe("2");
  });

  test("clearCart empties items and resets restaurantDetails", () => {
    const state = {
      restaurantDetails: { name: "R" },
      items: [{ id: "1", name: "Pizza", quantity: 1 }],
    };

    const next = cartReducer(state, clearCart());
    expect(next.items).toHaveLength(0);
    expect(next.restaurantDetails).toEqual({});
  });
});
