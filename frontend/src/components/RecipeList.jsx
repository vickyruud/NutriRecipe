// import React from "react"
import RecipeListItem from "./RecipeListItem";


import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {props.recipes.map((recipe, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <RecipeListItem recipe={recipe} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
