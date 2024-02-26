import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allCvs: null,
    allCvsUnfiltered: null,
    cvDetail: null,
    numberOfPages: null
  }
  const cvsSlice = createSlice({
    name: "cvs",
    initialState,
    reducers: {
      setAllCvs(state, action) {
        state.allCvs = action.payload
      },
      setAllCvsUnfiltered(state, action) {
        state.allCvsUnfiltered = action.payload
      },
      setCvDetail(state, action) {
        state.cvDetail = action.payload
      },
      setNumberOfPages(state, action) {
        state.numberOfPages = action.payload
      }
    },
  });
  
  export const { setAllCvs, setCvDetail, setNumberOfPages, setAllCvsUnfiltered} = cvsSlice.actions;
  export default cvsSlice.reducer;