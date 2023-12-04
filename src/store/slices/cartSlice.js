import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    someAction: (state, action) => {},
  },
});

export const { someAction } = cartSlice.actions;

export default cartSlice.reducer;
