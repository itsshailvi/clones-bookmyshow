import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/joy/IconButton';

const Header = () => {
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      }));

      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));

      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
              width: '20ch',
            },
          },
        },
      }));



    return (
        <>
            <div style={{ display: "flex", alignItems: "center" }}>
                <img alt = 'bookMyShow' src="data:image/png;base64,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" height="40px" width="120px"/>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
          {/* <Fab color="secondary" aria-label="like">
            <FavoriteIcon />
          </Fab> */}
          <IconButton variant="plain" color="neutral" size="sm">
            <FavoriteBorder />
          </IconButton>

                
            </div>

            {/* <div>Header</div> */}
        </>

    )
}

export default Header