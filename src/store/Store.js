import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import DataSlice from "./DataSlice";
import TvSlice from "./TvSlice";

const store = configureStore({
  reducer: {
    user: UserSlice,
    data: DataSlice,
    tvData: TvSlice,
  },
});
export default store;
