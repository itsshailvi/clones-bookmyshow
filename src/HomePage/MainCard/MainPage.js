import { SettingsSystemDaydreamTwoTone } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import AllCard from './AllCard'
import '../../App.css'
import { useDispatch, useSelector } from 'react-redux';
import { updateQuery, updateResults } from './../Header/searchSlice'

const MainPage = () => {
  const [user, setUser] = useState([])
  const dispatch = useDispatch();
  const { query, results } = useSelector((state) => state.search);

  useEffect(() => {
    fetchMovie()
  }, [])

  const fetchMovie = async () => {
    const header = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkN2NkZDgyZTYzNTNkNTg3Mzc5YWMxZjdjNzc5N2JlYiIsInN1YiI6IjY0YTE0MjhiYzM5MGM1MDBlYjM1NTU0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tw-vDY3w7kzHCUJHIVW9iKH-9RmwFhbUjMXcPvsWnPg'
    }
    if(!query){
      fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', { method: 'GET', headers: header })
      .then(response => { return response.json() }).then(data => setUser(data.results))
    }else{
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${bard}&include_adult=false&language=en-US&page=1`, { method: 'GET', headers: header })
      .then(response => { return response.json() }).then(data => setUser(data.results))
    }

  }

  console.log(user, 'test')
  return (
    <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' , gap: '20px'}}>
      {user.map((data) => 
        <AllCard image={data.backdrop_path} title={data.title} rating={data.vote_average} language={data.original_language} desc={data.overview} popularity={data.popularity}/>
      )}
    </div>
  )
}

export default MainPage
