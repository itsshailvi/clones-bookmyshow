import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import { useDispatch, useSelector } from 'react-redux';
import {  fetchUserData, fetchGenres, fetchMovie, fetchMovieName } from './../../HomePage/Header/searchSlice'

const Navbar = () => {
    const dispatch = useDispatch();
    const {users, query } = useSelector((state) => state.search);
    useEffect(()=> {
      dispatch(fetchUserData());
    },[])

    const fetchGenre = (id) => {
      if(query.length){
        dispatch(fetchMovieName(query))
      }else{
        dispatch(fetchMovie())
      }
      setTimeout(() => {
        dispatch(fetchGenres(id));
      },10)
    }

  return (
    <Box
      sx={{ width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper'}}
    >
      <div>
      <h1>Genres</h1>
      </div>
      <div style={{display: 'flex', justifyContent: 'flex-end'}}>
      <nav aria-label="secondary mailbox folders" >
        {users && users.map((data, index)=> 
         <List key={index}>
         <ListItem disablePadding>
           <ListItemButton onClick={() => fetchGenre(data.id)}>
             <ListItemText primary={data.name} />
           </ListItemButton>
         </ListItem>
       </List>
        )}
      </nav>
      </div>
    </Box>
  )
}

export default Navbar