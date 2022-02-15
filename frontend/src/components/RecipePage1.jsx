import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import IngredientTable from "./IngredientTable";
import RecipeSteps from "./RecipeSteps";
import NutriContent from "./NutriContent";
import DoughnutChart from "../charts/Doughnut";
import { Card } from "@mui/material";
import "./recipePage.css";
import Comments from "./Comments";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  border: "none",
  boxShadow: "none",
}));

export default function Recipes(props) {
  // console.log("this are comments", props.comments);
  return (
    <Box sx={{ width: "100%" }}>
      <Grid
        style={{ outline: "none", border: 0 }}
        container
        rowSpacing={-2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={6}>
          <h1> {props.selectRecipe.name} </h1>
          <Item>
            <IngredientTable list={props.selectRecipe} />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <h3>Nutrition Content</h3>
          <Item><NutriContent list = {props.selectRecipe}/></Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <NutriContent list={props.selectRecipe} />
          </Item>
        </Grid>
      </Grid>

    </Box>
  );
}
