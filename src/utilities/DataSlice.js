import { fetch_options } from "./Constants";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  try {
    const res = await Promise.all([
      fetch(
        "https://api.themoviedb.org/3/trending/movie/week?language=en-US",
        fetch_options,
      ),
      fetch(
        "https://api.themoviedb.org/3/trending/tv/week?language=en-US",
        fetch_options,
      ),
      fetch(
        "https://api.themoviedb.org/3/discover/tv?with_genres=action&with_networks=213",
        fetch_options,
      ),
      fetch(
        "https://api.themoviedb.org/3/discover/tv?with_genres=action&with_networks=1024",
        fetch_options,
      ),
    ]);
    const data = await Promise.all(res.map((r) => r.json()));
    return data;
  } catch {
    throw Error("Promise failed");
  }
});

const initialState = {
  trendingTV: [],
  trendingMovies: [],
  nfOriginals: [],
  netflixTV: [],
};
const DataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      const data = action.payload;
      state.trendingMovies = data[0].results;
      state.trendingTV = data[1].results;
      state.nfOriginals = data[2].results;
      state.netflixTV = data[3].results;
    });
  },
});
export const selectHomeData = (state) => state.data;
export default DataSlice.reducer;
