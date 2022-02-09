import React, {useState} from "react";
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import FormControl from '@mui/material/FormControl';
import IngredientItem from './IngredientItem'

const NewIngredientList = (props) => {
  const [ingredients, setIngredients] = React.useState({});
  const handleChange = (event) => {
    console.log(event.target.value)
    setIngredients(event.target.value);
  };

  return (
    <div className="NewIngredientList">
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '30ch' },
        }}
        noValidate
        autoComplete="off"
      >
         
         <FormControl required variant="standard" sx={{ m: 1, minWidth: 350 }}>
          <Fab color="primary" label="Add a new Ingredient">
            <AddIcon />
          </Fab>
        </FormControl>

        <IngredientItem />
        <IngredientItem />
        <IngredientItem />

      </Box>
    </div>
  )
}
export default NewIngredientList;