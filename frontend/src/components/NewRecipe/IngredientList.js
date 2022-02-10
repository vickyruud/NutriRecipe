import React, {Fragment, useState} from "react";
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import IngredientItem from './IngredientItem';


const NewIngredientList = (props) => {
  const [ingredients, setIngredients] = React.useState([{name:"",unit:"",quantity:0}]);

  const addIngredient=()=>{
    console.log('add ingredient');
    setIngredients([...ingredients,{name:"",unit:"",quantity:0}]);
  };
  const deleteIngredient=(i)=>{
    console.log('delete ingredient');
    let newIngredients = [...ingredients];
    newIngredients.splice(i,1);
    setIngredients(newIngredients);
  }
  let handleChange = (event, i) => {
    let newIngredients = [...ingredients];
    let newIngredient = {...newIngredients[i],[event.target.name]:event.target.value};
    newIngredients[i] = newIngredient;
    console.log('update ingredient')
    setIngredients(newIngredients);
  }
  console.log(ingredients)
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
        <Fab color="primary" label="Add a new Ingredient"onClick={addIngredient}>
          <AddIcon />
        </Fab>
        {ingredients.map((ingredient, index) => {
          return (
            <IngredientItem 
              ingredient = {ingredient} 
              onDelete={deleteIngredient} 
              onChange={(e)=>handleChange(e,index)}
            />      
          )
        })}
      </Box>
    </div>
  )
}
export default NewIngredientList;