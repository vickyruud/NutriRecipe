import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import PageviewSharpIcon from '@mui/icons-material/PageviewSharp';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';
import Button from "./Button";
import { Button as Button2 } from "@mui/material";
import Rating from "./Rating";
import Box from '@mui/material/Box';
import "../App.css";
import AverageRating from "./AverageRating";
import DisplayRatings from "./DisplayRating";

const styles = {

  largeIcon: {
    width: 40,
    height: 40,
  },

};

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

  

  let recipe = props.recipe;

  const viewRecipe = () => {
    props.setSelectRecipe({ ...props.recipe });
  };
  const [readMore, setReadMore] = useState(false);
  return (
    <Card
      className="recipe-card"
      elevation={20}
      sx={{ maxWidth: "500", height: "auto" }}
    >
      <CardMedia component="img" alt="photo" height="250" image={image_url} />
      <CardContent
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Typography gutterBottom variant="h8" component="div">
          {name}
          <DisplayRatings recipe={props.recipe} />
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
      <CardActions className="view-recipe-button">
        {!props.viewRecipe && 
          <Button size="small" onClick={viewRecipe} style={{ marginBottom: -50 }}>
          View Recipe
          </Button>
        }
        {props.viewRecipe &&
          <Box sx ={{ justifyContent:'flex-start'}}>          
            <Button2  onClick={()=>props.viewRecipe(recipe)}>
              <PageviewSharpIcon style ={styles.largeIcon}/>
            </Button2>
            <Button2 onClick={() => props.onEdit(recipe)}>
              <EditIcon style ={styles.largeIcon}/>
            </Button2>
            <Button2 onClick={()=>props.onDelete(recipe)}>
              <DeleteForeverSharpIcon style ={styles.largeIcon}/>
            </Button2>
          </Box>
        }
        
      </CardActions>
    </Card>
  );
}
