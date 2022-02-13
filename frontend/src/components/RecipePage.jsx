import React from "react";
import NutriContent from "./NutriContent";
import RecipeIngredients from './RecipeIngredients'

export default function Recipes(props) {
  
  const ingredientObj = eval(props.selectRecipe.ingredients);
  const ingredientsNames = ingredientObj.map(item => {
    return item.name;
  })
  return (
    
    <div style={{ display: "flex" }}>
      <div style={{ flex: "1 1 50%" }}>
        <h1> {props.selectRecipe.name} </h1>
        <ul>
          <li>{ingredientsNames}</li>
          <RecipeIngredients list={props.selectRecipe}/>
          {console.log("props",props)}
          <li>{props.selectRecipe.steps}</li>
          <li>{props.selectRecipe.estimated_time}</li>
          <li>{props.selectRecipe.rating}</li>
        </ul>
      </div>
      <div style={{ flex: "1 1 50%" }}>
        <h1>Image </h1>
        <img src={props.selectRecipe.image_url} alt="" />
      </div>
      {/* <NutritionTable/> */}
      <NutriContent list = {props.selectRecipe}/>
    </div>
  );
}
