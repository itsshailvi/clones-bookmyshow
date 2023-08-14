// store.js
import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './../HomePage/Header/searchSlice';
import thunkMiddleware from 'redux-thunk';



export const store = configureStore({
  reducer: {
    search: searchReducer,
    // other reducers...
  },
  middleware: [thunkMiddleware],
});

// export default store;
