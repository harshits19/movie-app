import { configureStore } from "@reduxjs/toolkit"
import UserSlice from "./UserSlice"
import DataSlice from "./DataSlice"
import TvSlice from "./TvSlice"
import SearchSlice from "./SearchSlice"
import MovieSlice from "./MovieSlice"

const store = configureStore({
  reducer: {
    user: UserSlice,
    data: DataSlice,
    tvData: TvSlice,
    movieData: MovieSlice,
    searchData: SearchSlice,
  },
})
export default store
