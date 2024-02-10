import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allSubscriptions: null,
  }
  const subscriptionsSlice = createSlice({
    name: "subscriptions",
    initialState,
    reducers: {
      setAllSubscriptions(state, action) {
        state.allSubscriptions = action.payload
      }
    },
  });
  
  export const { setAllSubscriptions} = subscriptionsSlice.actions;
  export default subscriptionsSlice.reducer;