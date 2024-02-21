import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allComments: null,
  }
  const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
      setAllComments(state, action) {
        state.allComments = action.payload
      }
    },
  });
  
  export const { setAllComments} = commentsSlice.actions;
  export default commentsSlice.reducer;