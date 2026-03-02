import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";
import fetchingSlice from "./fetchigSlice";
import bagSlice from "./bagSlice";

const myntraStore = configureStore({
  reducer: {
    items: itemSlice.reducer,
    fetchstatus: fetchingSlice.reducer,
    bag: bagSlice.reducer,
  },
});
export default myntraStore;
