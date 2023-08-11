import React, { useEffect } from 'react'
import AllCard from './AllCard'
import '../../App.css'
import { useDispatch, useSelector } from 'react-redux';
import { updateResults, fetchMovie } from './../Header/searchSlice'

const MainPage = () => {
  const dispatch = useDispatch();
  const {results } = useSelector((state) => state.search);

  useEffect(() => {
    dispatch(fetchMovie());
  }, [])

  // const fetchMovie = async () => {
  //   const header = {
  //     'Content-Type': 'application/json',
  //     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkN2NkZDgyZTYzNTNkNTg3Mzc5YWMxZjdjNzc5N2JlYiIsInN1YiI6IjY0YTE0MjhiYzM5MGM1MDBlYjM1NTU0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tw-vDY3w7kzHCUJHIVW9iKH-9RmwFhbUjMXcPvsWnPg'
  //   }
  //   const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', { method: 'GET', headers: header })
  //   const data = await response.json();
  //   dispatch(updateResults(data.results));

  // }

  console.log(results, 'test')
  return (
    <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' , gap: '20px'}}>
      {results.map((results) => 
        <AllCard image={results.poster_path} title={results.title} rating={results.vote_average} language={results.original_language} desc={results.overview} popularity={results.popularity}/>
      )}
    </div>
  )
}

export default MainPage
