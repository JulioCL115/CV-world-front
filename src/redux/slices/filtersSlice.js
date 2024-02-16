import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: {
    search: "",
    sort: "",
    languages: "",
    subscriptions: "",
    categories: ""
  },
}
const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilters(state, action) {
      state.filters = action.payload
    }
  },
});

export const { setFilters } = filtersSlice.actions;
export default filtersSlice.reducer;