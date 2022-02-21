import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone';

export default function SearchBar(props) {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Recipes"
        onChange={e=>
      props.searchRecipe(e.target.value)}
      
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton  sx={{ p: '10px' }} aria-label="search">
          <CancelTwoToneIcon onClick = {props.closeSearch} />
      </IconButton>
    </Paper>
  );
}