import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';  // Correct import for thunk middleware
import rootReducer from './reducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), thunk],
});

export default store;
