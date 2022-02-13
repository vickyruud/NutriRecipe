import React, { useEffect, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import RecipeListItem from "../RecipeListItem";


// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(2),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));





export default function Empty (props) {
  const [message, setMessage] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [selectRecipe, setSelectRecipe] = useState(null);
  const fetchRecipes = () => {
  axios
    .get("/recipes") // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      console.log(response.data[0].name); // The entire response from the Rails API

      // setMessage(response.data[0].name);
      setRecipes(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
  console.log("selectrecipe====>", selectRecipe);
  console.log("recipes====>", recipes);
  useEffect(() => {
    fetchRecipes();
  }, []);
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        padding: 5,
      }}
    >
      <Grid
        container
        spacing={{ sm: 2, md: 3 }}
        columns={{ xs: 4, sm: 5, md: 20 }}
      >
        {recipes.map((recipe, index) => (
          <Grid item xs={4} sm={4} md={4} key={index}>
            <RecipeListItem
              setSelectRecipe={props.setSelectRecipe}
              recipe={recipe}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
// ,display:"flex", flexDirection:"row",justifyContent:"center"
