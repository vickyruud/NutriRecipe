import React,{useState} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { MenuItem } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import UploadImage from "./UploadImage";
import TextEditor from './TextEditor'
import IngredientList from "./IngredientList"

const NewRecipeForm = (props) => {
  const category = "";
  const handleChange = (event) => {
   // setCategory(event.target.value);
    console.log(event.target.name);
    recipe[event.target.name]=event.target.value;

  };
  const handleSave = (event) => {
    event.preventDefault();
    recipe.user_id = 1; //hard-coded
    recipe.category_id = category.id;
    recipe.name = event.target.elements.recipe_name.value;
    recipe.description = event.target.elements.description.value;
    recipe.serving_size = event.target.elements.serving_size.value;
    recipe.estimated_time = event.target.elements.estimated_time.value;
    recipe.steps = event.target.elements.steps.value;
    recipe.rating = event.target.elements.rating.value;
    recipe.image_url = event.target.elements.image_url.value;
  



  }

  /*
  let handleChange = (event, i) => {
    let newIngredients = [...ingredients];
    let newIngredient = {...newIngredients[i],[event.target.name]:event.target.value};
    newIngredients[i] = newIngredient;
    console.log('update ingredient')
    setIngredients(newIngredients);
  }
*/

  console.log(props.cate)
  const categories=[].concat(props.cates)
  
  const recipe = props.recipe || {};

  const handleSaveRecipe = () => {

  }
  return (
    <div className="NewRecipe">
          <Typography sx={{ fontSize: 20 }}fontWeight="bold"align="center">ADD A NEW RECIPE</Typography>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ fontSize: 20 }}>General Information</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '103ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField required name="recipe_name" label="Enter a Name for your Recipe" variant="outlined" />
            <TextField required name="description" label="Enter an Introduction for your Recipe" variant="outlined" />
          </Box>
          <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '30ch' },
              }}
              noValidate
              autoComplete="off"
            >
        <div> 
          <TextField
            required
            name="estimated_time"
            label="Time estimated (mins)"
          />
          <TextField
            required
            name="serving_size"
            label="Serving size (people)"
          />
          <FormControl required variant="standard" sx={{ m: 1, minWidth: 350 }}>
            <InputLabel sx={{ fontSize: 18 }}>Category</InputLabel>
            <Select
              required
              name="category"
              value={category}
              onChange={handleChange}
              label="Set a Category"
            >
              {categories.map(category =>
                <MenuItem value={category.id}>{category.name}</MenuItem>
              )}
            </Select>
          </FormControl>
        </div>
      </Box>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{ fontSize: 20 }}>Ingredient List</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <IngredientList />
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{ fontSize: 20 }}>Steps to Make</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <TextEditor
              name="steps"
              multiline
              maxRows={100}
              onChange={handleChange}
              variant="standard"
            />
          </Box>
       
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <UploadImage />
      </Accordion>


      <Box display="flex" flex-direction="row" justifyContent="center" paddingTop={5}>
        <Stack direction="row" spacing={10} >
          <Button variant="contained">Save your Recipe</Button>
          <Button variant="outlined" href="#outlined-buttons">
            View Nutrition Info
          </Button>
        </Stack>
      </Box>
    
    </div>
  );
}
export default NewRecipeForm
