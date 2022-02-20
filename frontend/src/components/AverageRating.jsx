import * as React from "react";

const AverageRating = (props) => {
  let sum = 0;
  let avg = 0;
  let val = 0;
  let roundedAvg = 0;
  const calculateAvgRatings = (ratings, recipes) => {
    ratings.forEach(element => {
      if (recipes.id === element.recipe_id) {
      sum += element.value;
        val++;
    }
      
    });     
    if (val > 0) {
      avg = sum / val;
    }
    console.log(Math.round(avg))
    
    roundedAvg = Math.round(avg * 10 / 10);
    
  }

  if (props.ratings) {
    calculateAvgRatings(props.ratings.ratings, props.list);

  }
 
  return <div>Average rating: {roundedAvg}</div>;
};

export default AverageRating;
