import { combineReducers } from "redux";
import usersReducer from "./slices/usersSlice";
import cvsReducer from "./slices/cvsSlice";

const rootReducer = combineReducers({
    users: usersReducer, 
    cvs: cvsReducer, 
  });
  
  export default rootReducer;