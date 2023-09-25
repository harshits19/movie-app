import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const SearchSlice = createSlice({
  name: "searchData",
  initialState,
  reducers: {
    addQuery: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});
export const { addQuery } = SearchSlice.actions;
export default SearchSlice.reducer;
