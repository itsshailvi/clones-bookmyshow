// searchSlice.js
import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    results: [],
  },
  reducers: {
    updateResults: (state, action) => {
      state.results = action.payload;
    },
  },
});

export const { updateQuery, updateResults } = searchSlice.actions;

export default searchSlice.reducer;
