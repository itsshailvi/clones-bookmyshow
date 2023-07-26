import { SettingsSystemDaydreamTwoTone } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'

const MainPage = () => {
  const [user, setUser] = useState([])

  useEffect(() => {
    fetchMovie()
  }, [])

  const fetchMovie = () => {
    const header = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkN2NkZDgyZTYzNTNkNTg3Mzc5YWMxZjdjNzc5N2JlYiIsInN1YiI6IjY0YTE0MjhiYzM5MGM1MDBlYjM1NTU0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tw-vDY3w7kzHCUJHIVW9iKH-9RmwFhbUjMXcPvsWnPg'
    }
    fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', { method: 'GET', headers: header })
    .then(response => { return response.json() }).then(data => setUser(data.results))
  }

  console.log(user, 'test')
  return (
    <div>MainPage</div>
  )
}

export default MainPage
