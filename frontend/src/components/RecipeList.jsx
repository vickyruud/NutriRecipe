import React from "react"
import RecipeListItem from "./RecipeListItem";

export default function recipeList(props){
  return(
    <section>
      <div className='title'><h2>Recipes</h2>
        </div>
      <div>
        {props.recipes.map(recipe=>
          <RecipeListItem recipe={recipe}
            key = {recipe.id}/>
          )}
      </div>
    </section>
    )}
