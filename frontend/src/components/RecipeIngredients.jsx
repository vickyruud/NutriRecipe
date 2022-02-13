import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import RecipeIngredientsNames from './RecipeIngredientsNames'

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




// // -look inside the database for ingredints
// -pass the ingredient id to the frontend
// -once the unique id exists in the ingrdientobj that is what we want to achieve 
export default function StylingHeaderGrid(props) {
  const ingredientObj = eval(props.list.ingredients);
  let i=1;
const rows2 = ingredientObj.map((item)=>{
  
  item.id = i++
  return item
  
})
  return (
    <div>
    
      {console.log("OBJ====>",ingredientObj)}
      {console.log("rows2===>",rows2)}
    <Box
      sx={{
        height: 300,
        width: 1,
        '& .super-app-theme--header': {
          backgroundColor: 'rgba(25, 7, 0, 0.55)',
        },
      }}
    >
      <DataGrid rows={rows2} columns={columns} />
    </Box>
    </div>
  );
}





  
    
  
  

