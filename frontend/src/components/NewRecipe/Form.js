import React, { Component } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function NewRecipe() {
  const [category, setCategory] = React.useState('');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

 
    return (
        <div className="NewRecipe">
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                required
                id="name"
                label="Enter the Recipe name here"
              />
            </div>
            <div> 
              <TextField
                required
                id="estimated_time"
                label="Time estimated (mins)"
              />
              <TextField
                required
                id="serving_size"
                label="Serving size"
              />
 
   
              <FormControl sx={{ m: 1, minWidth: 250 }}>
                <InputLabel id="demo-simple-select-autowidth-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="category_id"
                  value={category}
                  onChange={handleChange}
                  autoWidth
                  label="Category"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Twenty</MenuItem>
                  <MenuItem value={21}>Twenty one</MenuItem>
                  <MenuItem value={22}>Twenty one and a half</MenuItem>
                </Select>
              </FormControl>
            </div>
          </Box>
        </div>
    );
  }


