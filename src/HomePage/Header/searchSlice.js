// searchSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


export const fetchMovie = createAsyncThunk(
    "movie/getMovieSearch",
    async (payload) => {
        const header = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkN2NkZDgyZTYzNTNkNTg3Mzc5YWMxZjdjNzc5N2JlYiIsInN1YiI6IjY0YTE0MjhiYzM5MGM1MDBlYjM1NTU0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tw-vDY3w7kzHCUJHIVW9iKH-9RmwFhbUjMXcPvsWnPg'
          }
          const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', { method: 'GET', headers: header })
          const data = await response.json();
      return data.results;
    }
  );

  export const fetchMovieName = createAsyncThunk(
    "movie/getMovieSearch",
    async (payload) => {
        const header = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkN2NkZDgyZTYzNTNkNTg3Mzc5YWMxZjdjNzc5N2JlYiIsInN1YiI6IjY0YTE0MjhiYzM5MGM1MDBlYjM1NTU0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tw-vDY3w7kzHCUJHIVW9iKH-9RmwFhbUjMXcPvsWnPg'
          }
          if(payload.length){
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${payload}&include_adult=false&language=en-US&page=1`, { method: 'GET', headers: header })
            const data = await response.json();
            return data.results
          } 
    }
  );

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
  extraReducers: {
    [fetchMovie.fulfilled]: (state, { payload }) => {
        state.results = payload;
    },
    [fetchMovieName.fulfilled]: (state, { payload }) => {
        state.results = payload;
    },
  },
});

export const { updateQuery, updateResults } = searchSlice.actions;

export default searchSlice.reducer;
