import * as React from "react";

const AverageRating = (props) => {
  let sum = 0;
  let avg = 0;
  let val = 0;
  const calculateAvgRatings = (ratings, recipes) => {
    ratings.forEach(element => {
      if (recipes.id === element.recipe_id) {
      console.log(recipes.id);
      sum += element.rating;
      val++;
    }
      
    });     
    if (val > 0) {
      avg = sum / val;
    }
    console.log(avg)
    return Math.round(avg);
  }

  if (props.ratings) {
    calculateAvgRatings(props.ratings.ratings, props.list);

  }
 
  return <div>Average rating: {Math.round(avg)}</div>;
};

export default AverageRating;
