import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import IngredientTable from "./IngredientTable"
import RecipeSteps from './RecipeSteps';
import NutriContent from './NutriContent';
import DoughnutChart from "../charts/Doughnut";
import { Card } from '@mui/material';
import './recipePage.css'
import Comments from './Comments'
import DisplayComments from './DisplayComments';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  border: "none",
  boxShadow: "none"
}));

export default function Recipes(props) {
  return (

        
    
    <Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: "row", padding: 10 }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid style={{width: "auto", padding: 5}} item xs={2}>
          <Item style={{padding: 5}}><img src={props.selectRecipe.image_url} alt="" width={300} height={300} mode='fit'top padding={5}/> </Item>
        </Grid>
        <Grid style={{padding: 5}} item xs={4}>
            <h3>Ingredients:</h3>
          <Item>
          <IngredientTable list={props.selectRecipe} /> 
          </Item>
        </Grid>
        <Grid item xs={6}>
          <h3>Nutrition Content</h3>
          <Item><NutriContent list={props.selectRecipe}/></Item>
        </Grid>
        <Grid style={{padding: 5}} item xs={6}>
          <Item><RecipeSteps list={props.selectRecipe}/></Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            {/* <Comments comments={props.comments} list={props.selectRecipe} /> */}
            <DisplayComments comments={props.comments} list={props.selectRecipe} />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}