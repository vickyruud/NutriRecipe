import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import DeleteIcon from '@mui/icons-material/Delete';

const NewIngredientItem = (props) => {  
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
            name="name"
            label="Ingredient"
            onChange={props.onChange}
            value={props.ingredient.name}
            defaultValue={props.ingredient.name}
          />
          <TextField
            required
            name="unit"
            label="Unit"
            onChange={props.onChange}
            value={props.ingredient.unit}
            defaultValue={props.ingredient.unit}
          />
          <TextField
            required
            name="quantity"
            label="Quantity"
            onChange={props.onChange}
            value={props.ingredient.quantity}
            defaultValue={props.ingredient.quantity}
          />
          <Fab color="primary" aria-label="Delete">
            <DeleteIcon onClick={props.onDelete}/>
          </Fab>
        </div>
        
      </Box>
    </div>
  )
}
export default NewIngredientItem;