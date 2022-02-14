import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import IngredientTable from "./IngredientTable"
import RecipeSteps from './RecipeSteps';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Recipes(props) {
  return (
    <Box sx={{ width: '100%'}} >
      <Grid style={{outline:'none',border: 0}}container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
        <h1> {props.selectRecipe.name} </h1>
          <Item><IngredientTable list={props.selectRecipe} /> 
          </Item>
        </Grid>
        <Grid item xs={6}>
          <div></div>
          <Item><img src={props.selectRecipe.image_url} alt="" width={400} height={300} mode='fit'top padding={5}/> </Item>
        </Grid>
        <Grid style={{outline:'none'}}item xs={6}>
          <Item><RecipeSteps list={props.selectRecipe}/></Item>
        </Grid>
        <Grid item xs={6}>
          <Item>4</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
