import React, {useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Rating } from '@mui/material';
import CustomizedRating from './Rating';
import AverageRating from './AverageRating';
import NewRatings from './NewRatings';
import RatingUpdated from './RatingUpdated';
import './recipeCard.css'
import axios from 'axios'
import DisplayRatings from "./DisplayRating";


export default function RecipeCard(props) {
  const [ratingUpdated, setRatingUpdated] = useState(0);
  const [average, setAverage] = useState(props.list.average_rating)

  const [message, setMessage] = useState('');

  
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
    
    roundedAvg = Math.round(avg * 10 / 10);
    console.log(roundedAvg)

    updateAvgRating({
      ...props.list,
      id: props.list.id,
      average_rating: roundedAvg
    })
    
  }

  const updateAvgRating = (recipe) => {
    axios.put(`recipes/${recipe.id}`, recipe)
      .then(resp => {
        console.log(resp.data.average_rating);
        setAverage(resp.data.average_rating);
    })
  }

  useEffect(() => {
      calculateAvgRatings(props.ratings.ratings, props.list);

  }, [])
  
   const userName = props.users.map(user => {
    if (props.list.user_id === user.id) {
      return user.username
    }
  })
  

  

  const handleMessage = (input) => setMessage(input);
  
  return (
    <Card elevation={10}   sx={{ height: "auto" }}>
        <CardMedia
          component="img"
          height="290"
          image={props.selectRecipe.image_url}
          alt="recipe-image"
        />
      <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {props.selectRecipe.name}
        </Typography>
        <Typography>
          <p>Posted by:  {userName}</p>
        </Typography>
        {props.user && <div className='ratings-on-card'>
          {ratingUpdated === 1 && <RatingUpdated message={message} setRatingUpdated={setRatingUpdated} />}
          Your Rating: <NewRatings setRatingUpdated={setRatingUpdated} handleMessage={handleMessage} setRatingUpdated={setRatingUpdated} user={props.user} ratings={props.ratings} list={props.selectRecipe} />
        </div>}
        Average Rating : {average}
        <Typography variant="body2" color="text.secondary">
            {props.selectRecipe.description}
          </Typography>
        </CardContent>
    </Card>
  );
}
