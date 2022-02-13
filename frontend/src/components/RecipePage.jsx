import React from "react";
// import IngredientTable from "./IngredientTable";
import IngredientTable from "./IngredientTable"
import RecipeSteps from './RecipeSteps';

export default function Recipes(props) {
  
  return (
    
    <div style={{ display: "flex" }}>
      <div style={{ flex: "1 1 50%" }}>
        <h1> {props.selectRecipe.name} </h1>
        <ul>
    
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
    </div>
  );
}
