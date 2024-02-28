import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allLanguages: null,
  allLanguagesUnfiltered: null
}
const languagesSlice = createSlice({
  name: "languages",
  initialState,
  reducers: {
    setAllLanguages(state, action) {
      state.allLanguages = action.payload
    },
    setAllLanguagesUnfiltered(state, action) {
      state.allLanguagesUnfiltered = action.payload
    }
  }
});

export const { setAllLanguages, setAllLanguagesUnfiltered } = languagesSlice.actions;
export default languagesSlice.reducer;