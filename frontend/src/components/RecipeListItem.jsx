import React from "react";


export default function recipeListItem(props){
const {id,name,description,ingredients,steps,serving_size,estimated_time,rating,image_url} = props.recipe
  return( 
  <article key={id} className="recipe">
    <div>
    <h4>{rating}</h4>
    <span role="img" aria-label="Star">⭐️⭐️⭐️⭐️</span>
      <h1>{name}</h1>
    {/* <h2>{serving_size}</h2>
    <h2>{estimated_time}</h2> */}
    </div>
      <img class= "recipeImg" src={image_url}
    alt ={name} />
    {/* <h2>{description}</h2>
    <h2>{ingredients}</h2>  */}
    
    </article>

  )
}
