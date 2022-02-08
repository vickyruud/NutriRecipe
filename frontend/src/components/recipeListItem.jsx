import React, { useState } from "react";

export default function recipeListItem(props) {
  
  const {
    id,
    name,
    description,
    ingredients,
    steps,
    serving_size,
    estimated_time,
    rating,
    image_url,
  } = props.recipe;
  const ingredientObj = eval(ingredients);
  const [readMore, setReadMore] = useState(false)
  return (
    <article key={id} className="single-recipe">
<h4>{name}</h4>
        <div>
        <h4>{rating}</h4>
        <span role="img" aria-label="Star">
          ⭐️⭐️⭐️⭐️
        </span>
        </div>
      <img class="recipeImg" src={image_url} alt={name} />
      <div>
        
        {/* <h2>{serving_size}</h2>
    <h2>{estimated_time}</h2> */}
      </div>
      <footer>
        <div className="recipe-info">
          <p>{description}</p>
          <p>{ingredientObj[0].name} </p>
        </div>
      </footer>
    </article>
  );
}
