import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./UserSlice";
import MovieSlice from "./MovieSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    moviesDb: MovieSlice,
  },
});
export default store;
