import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allLanguages: null,
  }
  const languagesSlice = createSlice({
    name: "languages",
    initialState,
    reducers: {
      setAllLanguages(state, action) {
        state.allLanguages = action.payload
      }
    },
  });
  
  export const { setAllLanguages} = languagesSlice.actions;
  export default languagesSlice.reducer;