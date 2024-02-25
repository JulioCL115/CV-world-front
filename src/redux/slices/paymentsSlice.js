import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    subscriptionId: null,
}
const paymentsSlice = createSlice({
    name: "payments",
    initialState,
    reducers: {
        setSubscriptionId(state, action) {
            console.log("SET SUBSCRIPTION ID: " + action.payload);    
            state.subscriptionId = action.payload
        },
    },
});

export const { setSubscriptionId } = paymentsSlice.actions;
export default paymentsSlice.reducer;