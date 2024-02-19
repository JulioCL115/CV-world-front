import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    paymentStatus: null,
    paymentLink: null,
}
const paymentsSlice = createSlice({
    name: "payments",
    initialState,
    reducers: {
        setPaymentStaus(state, action) {
            state.paymentStatus = action.payload
        },
        setPaymentLink(state, action) {
            state.paymentStatus = action.payload
        },
    },
});

export const {setPaymentLink, setPaymentStaus} = paymentsSlice.actions;
export default paymentsSlice.reducer;