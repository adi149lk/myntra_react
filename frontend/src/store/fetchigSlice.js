import { createSlice } from "@reduxjs/toolkit";

const fetchingSlice = createSlice({
  name: "Fetching",
  initialState: { fetchingDone: false, currentlyFetching: false },
  reducers: {
    markFetchigStarted: (state) => {
      state.currentlyFetching = true;
    },
    markFetchigFinshed: (state) => {
      state.currentlyFetching = false;
    },
    markFetchigDone: (state) => {
      state.fetchingDone = true;
    },
  },
});
export default fetchingSlice;
export const fetchingActions = fetchingSlice.actions;
