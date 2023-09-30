import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  data: localStorage.getItem("userList") ? JSON.parse(localStorage.getItem("userList")) : [],
}

const LibrarySlice = createSlice({
  name: "libraryData",
  initialState,
  reducers: {
    addItemToLibrary(state, action) {
      let data = action.payload
      let { uid } = data
      if (!state.data[uid]) state.data = { ...state.data, [uid]: [] }
      let sliceData = [...state.data[uid], data]
      state.data[uid] = sliceData
      localStorage.setItem("userList", JSON.stringify(state.data))
    },
    removeItemFromLibrary(state, action) {
      const dataRes = action.payload
      const { uid } = dataRes
      let sliceData = state.data[uid].filter((data) => data.item.id !== dataRes.item.id)
      state.data[uid] = sliceData
      localStorage.setItem("userList", JSON.stringify(state.data))
    },
    clearLibrary(state, action) {
      const { uid } = action.payload
      state.data[uid] = []
    },
  },
})
export const { addItemToLibrary, removeItemFromLibrary, clearLibrary } = LibrarySlice.actions
export default LibrarySlice.reducer
