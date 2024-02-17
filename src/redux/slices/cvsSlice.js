import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allCvs: null,
    totalpages: null,
    cvDetail: null
  }
  const cvsSlice = createSlice({
    name: "cvs",
    initialState,
    reducers: {
      setAllCvs(state, action) {
        state.allCvs = action.payload
      },
      setTotalPage(state,action){
        state.totalpages = action.payload
      },
      setCvDetail(state, action) {
        state.cvDetail = action.payload
      },
    },
  });
  
  export const { setAllCvs, setCvDetail,setTotalPage} = cvsSlice.actions;
  export default cvsSlice.reducer;