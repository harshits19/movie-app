import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import DataSlice from "./DataSlice";

const store = configureStore({
  reducer: {
    user: UserSlice,
    data: DataSlice,
  },
});
export default store;
