import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allUsers: null,
    userDetail: null,
    currentUser: null
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
      setCurrentUser(state, action) {
        state.currentUser = action.payload
      },
    },
  });
  
  export const { setAllUsers, setUserDetail, setCurrentUser} = usersSlice.actions;
  export default usersSlice.reducer;