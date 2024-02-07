import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allCvs: null,
    cvDetail: null
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
    },
  });
  
  export const { setAllCvs, setCvDetail} = cvsSlice.actions;
  export default cvsSlice.reducer;