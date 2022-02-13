import  React, {useEffect, useState} from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];



export default function NutriContent(props) {

  const [ingredients, setIngredients] = useState([]);
  const rows = eval(props.list.ingredients);


  const ingredients1 = rows.map(ingredient => {
    return ingredient.name + " "
  });

  

  const nutriInfo = (ingredients) => {

    if (ingredients !== null) {
      axios.get(`https://api.calorieninjas.com/v1/nutrition?query=${ingredients}`, {
        headers: {
          'X-Api-Key': 'yFhkwaiAwI1NnhFNsRWEMA==5Adx9bOrBA17c3Jj',
        },
        contentType: 'application/json'
      }).then((resp) => {  
        setIngredients(resp.data.items);
        console.log(resp.data.items);
      })
    }
  }

  useEffect(() => {

    nutriInfo(ingredients1);
    console.log(ingredients)

  }, [])
  
  
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Ingredient(100 g)</StyledTableCell>
            <StyledTableCell align="right">Calories</StyledTableCell>
            <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Fiber&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Sugar&nbsp;(g)</StyledTableCell>


          </TableRow> 
        </TableHead>
        <TableBody>
          {ingredients.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat_total_g}</StyledTableCell>
              <StyledTableCell align="right">{row.carbohydrates_total_g}</StyledTableCell>
              <StyledTableCell align="right">{row.protein_g}</StyledTableCell>
              <StyledTableCell align="right">{row.fiber_g}</StyledTableCell>
              <StyledTableCell align="right">{row.sugar_g}</StyledTableCell>


            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
