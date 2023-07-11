import React from 'react'
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';

const Navbar = () => {
  
    useEffect(()=> {
        
    })

    const fetchUserData = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then(response => {
            return response.json()
          })
          .then(data => {
            setUsers(data)
          })
      }

  return (
    <Box
      sx={{ width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper' }}
    >
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Trash" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  )
}

export default Navbar