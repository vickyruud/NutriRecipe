import React, {useState} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import DeleteIcon from '@mui/icons-material/Delete';

const NewIngredientItem = (props) => {
  const [ingredient, setIngredient] = React.useState({});
  const handleChange = (event) => {
    console.log(event.target.value)
    setIngredient(event.target.value);
  };

  return (
    <div className="NewIngredientItem">
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '30ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div> 
          <TextField
            required
            id="name"
            label="Ingredient"

          />
          <TextField
            required
            id="unit"
            label="Unit"
          />
          <TextField
            required
            id="quantity"
            label="Quantity"
          />
          <Fab color="primary" aria-label="Delete">
            <DeleteIcon />
          </Fab>
        </div>
        
      </Box>
    </div>
  )
}
export default NewIngredientItem;