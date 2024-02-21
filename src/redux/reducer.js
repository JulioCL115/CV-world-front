import { combineReducers } from "redux";
import usersReducer from "./slices/usersSlice";
import cvsReducer from "./slices/cvsSlice";
import languagesReducer from "./slices/languagesSlice";
import subscriptionsReducer from "./slices/subscriptionsSlice";
import categoriesReducer from "./slices/categoriesSlice";
import authReducer from "./slices/authSlice";
import paginationReducer from "./slices/paginationSlice";
import paymentsReducer from "./slices/paymentsSlice";
import commentsReducer from "./slices/commentsSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
  cvs: cvsReducer,
  languages: languagesReducer,
  subscriptions: subscriptionsReducer,
  categories: categoriesReducer,
  pagination: paginationReducer,
  payments: paymentsReducer,
  comments: commentsReducer,
});

export default rootReducer;