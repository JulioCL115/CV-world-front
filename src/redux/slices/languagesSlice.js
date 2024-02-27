import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allLanguages: null,
  allLanguagesUnfiltered: null,
  languageDetail: null
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

    },
    setLanguageDetail(state, action) {
      state.languageDetail = action.payload
    }
  }
});

export const { setAllLanguages, setAllLanguagesUnfiltered, setLanguageDetail } = languagesSlice.actions;
export default languagesSlice.reducer;