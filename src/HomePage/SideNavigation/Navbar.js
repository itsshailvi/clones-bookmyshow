import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';

const Navbar = () => {
    const[users, setUsers] = useState([])
    useEffect(()=> {
      fetchUserData()     
    },[])

    const fetchUserData = () => {
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkN2NkZDgyZTYzNTNkNTg3Mzc5YWMxZjdjNzc5N2JlYiIsInN1YiI6IjY0YTE0MjhiYzM5MGM1MDBlYjM1NTU0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tw-vDY3w7kzHCUJHIVW9iKH-9RmwFhbUjMXcPvsWnPg'
      };
        fetch("https://api.themoviedb.org/3/genre/movie/list?language=en",{
          method: 'GET',
          headers: headers
        })
          .then(response => {
            return response.json()
          })
          .then(data => {
            setUsers(data.genres)
          })
      }



  return (
    <Box
      sx={{ width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper' }}
    >
      <nav aria-label="secondary mailbox folders">
        {users && users.map((data)=> 
         <List>
         <ListItem disablePadding>
           <ListItemButton>
             <ListItemText primary={data.name} />
           </ListItemButton>
         </ListItem>
       </List>
        )}
      </nav>
    </Box>
  )
}

export default Navbar