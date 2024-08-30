import React from 'react'
import { FormControl,OutlinedInput,InputAdornment } from '@mui/material';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
function Search() {
  return (
    <div>
        <FormControl sx={{ width: { xs: '100%', md: '40ch' },padding:'20px', }} variant="outlined">
      <OutlinedInput
        size="small"
        id="search"
        placeholder="Search…"
        sx={{ flexGrow: 1 ,color:'white',borderColor:'white',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'gray',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'gray',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'blue',
            },
        }}
        startAdornment={
          <InputAdornment position="start" sx={{ color: 'white' }}>
            <SearchRoundedIcon fontSize="small" />
          </InputAdornment>
        }
        inputProps={{
          'aria-label': 'search',
        }}
      />
    </FormControl>
    </div>
  )
}

export default Search