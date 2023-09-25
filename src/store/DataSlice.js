import { fetch_options } from "../utilities/Constants";
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
  status: "idle",
};
const DataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    clearData(state, action) {
      state.trendingMovies = [];
      state.trendingTV = [];
      state.nfOriginals = [];
      state.netflixTV = [];
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchData.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.status = "success";
      const data = action.payload;
      state.trendingMovies = data[0].results;
      state.trendingTV = data[1].results;
      state.nfOriginals = data[2].results;
      state.netflixTV = data[3].results;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.status = "failed";
    });
  },
});
export const selectHomeData = (state) => state.data;
export const selectHomeStatus = (state) => state.data.status;
export const { clearData } = DataSlice.actions;
export default DataSlice.reducer;
