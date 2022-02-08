import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Button from './Button';

export default function RecipeListItem(props) {
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
    <Card sx={{ maxWidth: 400, height: 500 }}>
      <CardMedia
        component="img"
        alt="photo"
        height="200"
        image={image_url}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Serving Size</Button>
        <Button size="small">Learn More</Button>
        <Button size="small">Nutri Facts</Button>
      </CardActions>
    </Card>
  );
}
