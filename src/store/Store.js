import { configureStore } from "@reduxjs/toolkit"
import UserSlice from "./UserSlice"
import DataSlice from "./DataSlice"
import TvSlice from "./TvSlice"
import SearchSlice from "./SearchSlice"
import MovieSlice from "./MovieSlice"
import LibrarySlice from "./LibrarySlice"

const store = configureStore({
  reducer: {
    user: UserSlice,
    data: DataSlice,
    tvData: TvSlice,
    movieData: MovieSlice,
    searchData: SearchSlice,
    libraryData: LibrarySlice,
  },
})
export default store
