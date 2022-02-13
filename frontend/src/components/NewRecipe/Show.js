import React from "react";
import NutritionTable from "../NutritionFacts";

export default function Show(props) {
  console.log("props", props);
  const ingredientObj = eval(props.recipe.ingredients);
  const ingredientsNames = ingredientObj && ingredientObj.map(item => {
    console.log('item', item)
    return item.name;
  })
  console.log('ingredientsNames', ingredientsNames)
  // console.log("Json", eval(props.selectRecipe.ingredients));
  // const ingredientObj = eval(props.selectRecipe.ingredients);
  // const ingredientsNames = ingredientObj.map(item => {
  //   return item.name;
  // })
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: "1 1 50%" }}>
        <h1> {props.recipe.name} </h1>
        <ul>
          {console.log(ingredientObj)}
          {/* <li>{ingredientsNames}</li> */}
          {/* <li>{props.selectRecipe.ingredients}</li> */}
          {/* <li>{ingredientObj}</li> */}
          <li>{props.recipe.steps}</li>
          <li>{props.recipe.estimated_time}</li>
          <li>{props.recipe.rating}</li>
        </ul>
      </div>
      <div style={{ flex: "1 1 50%" }}>
        <h1>Image </h1>
        <img src={props.recipe.image_url} alt="" />
      </div>
      <NutritionTable/>
    </div>
  );
}
