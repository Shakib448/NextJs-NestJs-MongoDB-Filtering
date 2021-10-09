import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: [],
  },
  reducers: {
    orderAction(state, { payload }) {
      state.orders = payload;
    },
  },
});

export const { orderAction } = orderSlice.actions;

export default orderSlice.reducer;

// Selector

export const adminOrderSelector = (state: RootState) => state.entities.order;
