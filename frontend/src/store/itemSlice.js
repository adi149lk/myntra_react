import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addInitialItems: (state, action) => {
      console.log("come to itemSlice");
      return action.payload;
    },
  },
});
export default itemSlice;
export const itemsActions = itemSlice.actions;
