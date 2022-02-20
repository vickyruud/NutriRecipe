import React, {useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Rating } from '@mui/material';
import CustomizedRating from './Rating';
import AverageRating from './AverageRating';
import NewRatings from './NewRatings';
import RatingUpdated from './RatingUpdated';

export default function RecipeCard(props) {
  const [ratingUpdated, setRatingUpdated] = useState(0);
  const [message, setMessage] = useState('');

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
        {ratingUpdated === 1 && <RatingUpdated message={message} setRatingUpdated={setRatingUpdated}/>}
        <NewRatings setRatingUpdated={setRatingUpdated} handleMessage={handleMessage} setRatingUpdated={setRatingUpdated} user={props.user }ratings={props.ratings} list={props.selectRecipe} />
          <AverageRating list={props.selectRecipe}
                ratings={props.ratings}/>      
          <Typography variant="body2" color="text.secondary">
            {props.selectRecipe.description}
          </Typography>
        </CardContent>
    </Card>
  );
}
