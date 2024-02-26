import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allSubscriptions: null,
    allSubscriptionsUnfiltered: null,
    subscriptionDetail: null
  }
  const subscriptionsSlice = createSlice({
    name: "subscriptions",
    initialState,
    reducers: {
      setAllSubscriptions(state, action) {
        state.allSubscriptions = action.payload
      },
      setSubscriptionDetail(state, action) {
        state.subscriptionDetail = action.payload
      },
      setAllSubscriptionsUnfiltered(state, action) {
        state.allSubscriptionsUnfiltered = action.payload
      }
    },
  });
  
  export const { setAllSubscriptions, setSubscriptionDetail, setAllSubscriptionsUnfiltered} = subscriptionsSlice.actions;
  export default subscriptionsSlice.reducer;