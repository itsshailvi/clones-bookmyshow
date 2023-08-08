// store.js
import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';

const store = configureStore({
  reducer: {
    search: searchReducer,
    // other reducers...
  },
});

export default store;
