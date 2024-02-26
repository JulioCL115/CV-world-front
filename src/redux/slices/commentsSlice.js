import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allComments: null,
  allCommentsUnfiltered: null
}

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    setAllComments(state, action) {
      state.allComments = action.payload
    },
    setAllCommentsUnfiltered(state, action) {
      state.allCommentsUnfiltered = action.payload
    }
  },
});

export const { setAllComments, setAllCommentsUnfiltered } = commentsSlice.actions;
export default commentsSlice.reducer;