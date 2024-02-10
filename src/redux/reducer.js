import { combineReducers } from "redux";
import usersReducer from "./slices/usersSlice";
import cvsReducer from "./slices/cvsSlice";
import languagesReducer from "./slices/languagesSlice";
import subscriptionsReducer from "./slices/subscriptionsSlice";
import categoriesReducer from "./slices/categoriesSlice";

const rootReducer = combineReducers({
    users: usersReducer, 
    cvs: cvsReducer, 
    languages: languagesReducer,
    subscriptions: subscriptionsReducer,
    categories: categoriesReducer
  });
  
  export default rootReducer;