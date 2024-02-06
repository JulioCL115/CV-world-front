import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allUsers: null,
    userDetail: null
  }
  const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
      setAllUsers(state, action) {
        state.allUsers = action.payload
      },
      setUserDetail(state, action) {
        state.userDetail = action.payload
      },
    },
  });
  
  export const { setAllUsers, setUserDetail} = usersSlice.actions;
  export default usersSlice.reducer;