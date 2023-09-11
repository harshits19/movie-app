import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
  name: "moviesDb",
  initialState: {
    topRated: null,
    popular: null,
    nowPlaying: null,
    movieCache: {},
  },
  reducers: {
    addTopRatedMovies: (state, action) => {
      state.topRated = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popular = action.payload;
    },
    addNowPlayingMovies: (state, action) => {
      state.nowPlaying = action.payload;
    },
    addMovieToCache: (state, action) => {
      state.movieCache = Object.assign(state.movieCache, action.payload);
    },
    removeAll: (state) => {
      state.movieDb = {};
    },
  },
});

export const {
  addTopRatedMovies,
  addNowPlayingMovies,
  addPopularMovies,
  addMovieToCache,
  removeAll,
} = MovieSlice.actions;
export default MovieSlice.reducer;
