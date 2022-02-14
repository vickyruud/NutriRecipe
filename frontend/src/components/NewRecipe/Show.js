import React from "react";
// import IngredientTable from "./IngredientTable";
import IngredientTable from "../IngredientTable"
import RecipeSteps from '../RecipeSteps';
import NutriContent from "../NutriContent";
import RecipeIngredients from '../RecipeIngredients'
import Button from '@mui/material/Button';

export default function Recipes(props) {
  
  return (
    
    <div style={{ display: "flex" }}>
      <Button size="small" onClick={props.onEdit} style={{ marginBottom: -50 }}>
          Edit Recipe
      </Button>
      <Button size="small" onClick={props.onDelete} style={{ marginBottom: -50 }}>
          Delete Recipe
      </Button>
      <div style={{ flex: "1 1 50%" }}>
        <h1> {props.selectRecipe.name} </h1>
        <ul>
          {/* <li>{ingredientsNames}</li> */}
          <RecipeIngredients list={props.selectRecipe}/>
          {console.log("props",props)}
          <li>{props.selectRecipe.steps}</li>
    
           < IngredientTable list={props.selectRecipe}/> 
          
          <li><RecipeSteps list={props.selectRecipe}/></li> 
          <li>{props.selectRecipe.estimated_time}</li>
          <li>{props.selectRecipe.rating}</li>
        </ul>
      </div>
      <div style={{ flex: "1 1 50%" }}>
        <h1>Image </h1>
        <img src={props.selectRecipe.image_url} alt="" width={500} height={300} mode='fit'/>
      </div>
      {/* <NutritionTable/> */}
      <NutriContent list = {props.selectRecipe}/>
    </div>
  );
}
