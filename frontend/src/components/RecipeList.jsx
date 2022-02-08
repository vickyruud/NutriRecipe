import React from "react"
import RecipeListItem from "./RecipeListItem";

export default function recipeList(props){
  return(
    <section>
      <h1>Recipes</h1>
      <ul>
        {props.recipes.map(recipe=>
          <RecipeListItem recipe={recipe}
            key = {recipe.id}/>
          )}
      </ul>
    </section>
    )}
