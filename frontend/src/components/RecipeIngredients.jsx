import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
// import RecipeIngredientsNames from './RecipeIngredientsNames'

const columns = [
  {
    field: 'name',
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
    width: 140,
  },
  {
    field: 'unit',
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
    width: 140,
  },
  {
    field: 'quantity',
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
    width: 140,
  },
];

const rows = [
  {
    id  : 1,
    name: 1,
    unit: 'Carrots',
    quantity: '1234'
  },
  {
    id: 2,
    Ingredients: 'Milk',
    Quantity: '124'
  },
  {
    id: 3,
    Ingredients: 'Oats',
    Quantity: '1'
  },
];
// // -look inside the database for ingredints
// -pass the ingredient id to the frontend
// -once the unique id exists in the ingrdientobj that is what we want to achieve 
export default function StylingHeaderGrid(props) {
  const ingredientObj = eval(props.list.ingredients);
  
  return (
    <div>
    {/* {ingredientObj.map(ingredient=> 
      
    
            <RecipeIngredientsNames {...ingredient} />
 
      
      )} */}
      {console.log("OBJ====>",ingredientObj)}
    <Box
      sx={{
        height: 300,
        width: 1,
        '& .super-app-theme--header': {
          backgroundColor: 'rgba(255, 7, 0, 0.55)',
        },
      }}
    >
        {/* <DataGrid rows={ingredientObj} columns={columns} /> */}
    </Box>
    </div>
  );
}





  
    
  
  

