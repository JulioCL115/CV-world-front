import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: localStorage.getItem("token") || null,
  }
  const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      setToken(state, action) {
        state.token = action.payload
      },
      clearToken(state) {
        state.token = null
      }
    },
  });
  
  export const { setToken} = authSlice.actions;
  export default authSlice.reducer;