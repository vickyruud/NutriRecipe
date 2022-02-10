import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import Button from "./Button";
import Rating from "./Rating";

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
  const viewRecipe=()=>{
    props.setSelectRecipe({...props.recipe})
    
  }
  const [readMore, setReadMore] = useState(false);
  console.log("recipes====>", props.recipe)
  return (
    <Card elevation={20} sx={{ maxWidth: 400, height: 450 }}>
      <CardMedia component="img" alt="photo" height="200" image={image_url} />
      <CardContent>
        <Typography gutterBottom variant="h8" component="div">
        <div style={{display:"flex",flexDirection:"row"}} >{name} </div>
        <Rating></Rating>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {readMore ? description : `${description.substring(0, 70)}...`}
          <button
            style={{ background: "transparent", border: "none" }}
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "show less" : "read more"}
          </button>
        </Typography>
      </CardContent>
      <CardActions >
        {/* <Button size="small">Serving Size</Button> */}
        
        <Button size="small"style={{margin: '0 auto', display: "flex"}} onClick={viewRecipe} >View Recipe</Button>

        {/* <Button size="small">Nutri Facts</Button> */}
        
      </CardActions>
    </Card>
  );
}
