import { combineReducers } from "redux";
import usersReducer from "./slices/usersSlice";
import cvsReducer from "./slices/cvsSlice";
import languagesReducer from "./slices/languagesSlice";
import subscriptionsReducer from "./slices/subscriptionsSlice";
import categoriesReducer from "./slices/categoriesSlice";
import authReducer from "./slices/authSlice";
import filtersReducer from "./slices/filtersSlice";
import paginationReducer from "./slices/paginationSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
  cvs: cvsReducer,
  languages: languagesReducer,
  subscriptions: subscriptionsReducer,
  categories: categoriesReducer,
  filters: filtersReducer,
  pagination: paginationReducer,
});

export default rootReducer;