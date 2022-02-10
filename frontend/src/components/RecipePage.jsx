import React from "react";

export default function Recipes(props) {
  console.log("props", props);
  console.log("Json", eval(props.selectRecipe.ingredients));
  const ingredientObj = eval(props.selectRecipe.ingredients);
  const ingredientsNames = ingredientObj.map(item => {
    return item.name;
  })
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: "1 1 50%" }}>
        <h1> {props.selectRecipe.name} </h1>
        <ul>
          {console.log(ingredientObj)}
          <li>{ingredientsNames}</li>
          {/* <li>{props.selectRecipe.ingredients}</li> */}
          <li>{props.selectRecipe.steps}</li>
          <li>{props.selectRecipe.estimated_time}</li>
          <li>{props.selectRecipe.rating}</li>
        </ul>
      </div>
      <div style={{ flex: "1 1 50%" }}>
        <h1>Image </h1>
        <img src={props.selectRecipe.image_url} alt="" />
      </div>
    </div>
  );
}
