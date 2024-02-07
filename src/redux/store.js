import { applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from '../redux/reducer.js';
import { composeWithDevTools } from "redux-devtools-extension";


const store = configureStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk)) // esta línea es para poder hacer peticiones a un server
);
export default store;