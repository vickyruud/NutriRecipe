import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function RecipeSteps(props) {
  const recipeSteps = props.list.steps.split('.')
  recipeSteps.pop()
  return (
    <Box
      sx={{
        display: 'flex',
        '& > :not(style)': {
          m: 1,
          width: '100%',
          maxWidth: 700,
          height: 'auto',
        },
      }}
    >
      <Paper style={{ height: 'auto', width: "100%",elevation:20}}variant="outlined" >
        <ol style = {{textAlign:'left'}}>
          Steps:
    {recipeSteps.map(step=>{
      return <li>{`${step}.`}</li>
    })
  }
        </ol>
      </Paper>
    </Box>
  );
}
