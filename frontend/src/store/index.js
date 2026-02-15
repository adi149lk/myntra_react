import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";
import fetchingSlice from "./fetchigSlice";

const myntraStore = configureStore({
  reducer: {
    items: itemSlice.reducer,
    fetchstatus: fetchingSlice.reducer,
  },
});
export default myntraStore;
