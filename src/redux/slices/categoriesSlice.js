import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allCategories: null,
    allCategoriesUnfiltered: null,
    categoryDetail: null
  }
  const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
      setAllCategories(state, action) {
        state.allCategories = action.payload
      },
      setAllCategoriesUnfiltered(state, action) {
        state.allCategoriesUnfiltered = action.payload
      },
      setCategoryDetail(state, action) {
        state.categoryDetail = action.payload
      }
    },
  });
  
  export const { setAllCategories, setAllCategoriesUnfiltered, setCategoryDetail} = categoriesSlice.actions;
  export default categoriesSlice.reducer;