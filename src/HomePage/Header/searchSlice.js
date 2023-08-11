// searchSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


export const fetchMovie = createAsyncThunk(
    "search/fetchMovie",
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
    "search/fetchMovieName",
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

  export const fetchUserData = createAsyncThunk(
    "search/fetchUserData",
    async () => {
        const header = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkN2NkZDgyZTYzNTNkNTg3Mzc5YWMxZjdjNzc5N2JlYiIsInN1YiI6IjY0YTE0MjhiYzM5MGM1MDBlYjM1NTU0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tw-vDY3w7kzHCUJHIVW9iKH-9RmwFhbUjMXcPvsWnPg'
          }
        const response = await fetch("https://api.themoviedb.org/3/genre/movie/list?language=en", { method: 'GET', headers: header })
        const data = await response.json();
        return data.genres
    }
  );


const searchSlice = createSlice({
  name: 'search',
  initialState: {
    results: [],
    users: [],
    query: '',
  },
  reducers: {
    fetchGenres: (state, action) => {
      const list = state.results.filter((data) => data.genre_ids.includes(action.payload)
      )
      state.results = list
    },
    setQuery: (state, action) => {
      state.query = action.payload
    }
  },
  extraReducers: {
    [fetchMovie.fulfilled]: (state, { payload }) => {
        state.results = payload;
    },
    [fetchMovieName.fulfilled]: (state, { payload }) => {
        state.results = payload;
    },
    [fetchUserData.fulfilled]: (state, { payload }) => {
        state.users = payload;
    },
  },
});

export const { fetchGenres, setQuery} = searchSlice.actions;

export default searchSlice.reducer;
