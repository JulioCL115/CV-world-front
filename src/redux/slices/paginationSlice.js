import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentPage: 1,
    numberOfPages: 1,
}
const paginationSlice = createSlice({
    name: "pagination",
    initialState,
    reducers: {
        setCurrenPage(state, action) {
            state.currentPage = action.payload
        },
        setNumberOfPages(state, action) {
            state.numberOfPages = action.payload
        }
    },
});

export const { setCurrenPage, setNumberOfPages } = paginationSlice.actions;
export default paginationSlice.reducer;