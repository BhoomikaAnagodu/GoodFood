import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    restaurantDetails: {},
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push({ ...action.payload.item, quantity: 1 });
      state.restaurantDetails = action.payload.restData;
    },
    removeItem: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index > -1) {
        state.items.splice(index, 1);
      }
    },
    incrementItemQuanity: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index > -1) {
        state.items[index].quantity += 1;
      }
    },
    decrementItemQuanity: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index > -1) {
        state.items[index].quantity > 1
          ? (state.items[index].quantity -= 1)
          : state.items.splice(index, 1);
      }
    },
    clearCart: (state) => {
      state.items.length = 0;
      state.restaurantDetails = {};
    },
  },
});

export const {
  addItem,
  removeItem,
  clearCart,
  incrementItemQuanity,
  decrementItemQuanity,
} = cartSlice.actions;
export default cartSlice.reducer;
