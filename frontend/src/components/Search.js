
  
import React, { useEffect, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import { TextField } from '@mui/material';



const Search = (props) => {

  const [searchValue, setSearchValue] = useState('');
  
  const handleChange = (event) => {
    let searchTerm = event.target.value;
    setSearchValue(searchTerm);
  }

  useEffect(() => {
    console.log(searchValue)
  }, [searchValue])

    return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <TextField
            id="standard-basic"
            label="Search Recipe"
            variant="standard"
          placeholder="Search for a recipe"
          onChange={newValue => handleChange(newValue)}
          
        />
        <SearchIcon sx={{ marginRight: '10px' }} />
        </Box>
    )
}

export default Search