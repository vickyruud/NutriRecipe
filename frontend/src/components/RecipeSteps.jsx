import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function RecipeSteps(props) {
  const recipeSteps = props.list.steps.split('.')
  recipeSteps.pop()
  return (
   
      <Paper elevation={10} style={{ height: 'auto', width: "100%", padding: 10, border: "none"}}variant="elevation" >
        <ol style = {{textAlign:'left'}}>
          <div>
          Steps:
          </div>
    {recipeSteps.map(step=>{
      return <li>{`${step}.`}</li>
    })
  }
        </ol>
      </Paper>
    
  );
}
