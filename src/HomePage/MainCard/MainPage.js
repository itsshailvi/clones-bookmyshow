import React, { useEffect } from 'react'
import AllCard from './AllCard'
import '../../App.css'
import { useDispatch, useSelector } from 'react-redux';
import {  fetchMovie } from './../Header/searchSlice'

const MainPage = () => {
  const dispatch = useDispatch();
  const {results } = useSelector((state) => state.search);

  useEffect(() => {
    dispatch(fetchMovie());
  }, [])

  console.log(results, 'result')
  return (
    <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' , gap: '20px'}}>
      {results.map((results) => 
        <AllCard image={results.poster_path} title={results.title} rating={results.vote_average} language={results.original_language} desc={results.overview} popularity={results.popularity}/>
      )}
    </div>
  )
}

export default MainPage
