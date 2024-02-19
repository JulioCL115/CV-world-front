import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allCvs: null,
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
      setCvDetail(state, action) {
        state.cvDetail = action.payload
      },
      setNumberOfPages(state, action) {
        state.numberOfPages = action.payload
      }
    },
  });
  
  export const { setAllCvs, setCvDetail, setNumberOfPages} = cvsSlice.actions;
  export default cvsSlice.reducer;