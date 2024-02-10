import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allCategories: null,
  }
  const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
      setAllCategories(state, action) {
        state.allCategories = action.payload
      }
    },
  });
  
  export const { setAllCategories} = categoriesSlice.actions;
  export default categoriesSlice.reducer;