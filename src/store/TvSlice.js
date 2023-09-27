import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetch_options } from "../utilities/Constants"

const initialState = {
  data: {
    latest: [],
    popular: [],
    trending: [],
    topRated: [],
  },
  status: "idle",
}

export const fetchDataByGenre = createAsyncThunk("tvData/fetchDataByGenre", async (genre) => {
  try {
    const res = await Promise.all([
      fetch(`https://api.themoviedb.org/3/discover/tv?with_genres=${genre}&sort_by=primary_release_date.desc&with_networks=213`, fetch_options),
      fetch(`https://api.themoviedb.org/3/discover/tv?with_genres=${genre}&sort_by=popularity.desc&with_networks=213`, fetch_options),
      fetch(`https://api.themoviedb.org/3/discover/tv?with_genres=${genre}&sort_by=vote_count.desc&with_networks=213`, fetch_options),
      fetch(`https://api.themoviedb.org/3/discover/tv?with_genres=${genre}&sort_by=vote_average.desc&with_networks=213`, fetch_options),
    ])
    const data = await Promise.all(res.map((r) => r.json()))
    return data
  } catch {
    throw Error("Promise failed")
  }
})

const TvSlice = createSlice({
  name: "tvData",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchDataByGenre.pending, (state, action) => {
      state.status = "loading"
    })
    builder.addCase(fetchDataByGenre.fulfilled, (state, action) => {
      state.status = "success"
      const data = action.payload
      state.data.latest = data[0].results
      state.data.popular = data[1].results
      state.data.trending = data[2].results
      state.data.topRated = data[3].results
    })
    builder.addCase(fetchDataByGenre.rejected, (state, action) => {
      state.status = "failed"
    })
  },
})
export const selectTvData = (state) => state.tvData.data
export const selectTvStatus = (state) => state.tvData.status
export default TvSlice.reducer
