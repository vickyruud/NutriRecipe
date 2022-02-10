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
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import TextEditor from './TextEditor'
import IngredientList from "./IngredientList"

const NewRecipeForm = (props) => {
  const Input = styled('input')({
    display: 'none',
  });

  const [category, setCategory] = React.useState('');
  const handleChange = (event) => {
    setCategory(event.target.value);
  
  };
  const categories=[].concat(props.categories)
 
  return (
    <div className="NewRecipe">
          <Typography sx={{ fontSize: 20 }}fontWeight="bold"align="center">CREATE A NEW RECIPE</Typography>
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
                '& .MuiTextField-root': { m: 1, width: '30ch' },
              }}
              noValidate
              autoComplete="off"
            >
        <div> 
          <TextField
            required
            name="recipe_name"
            label="Enter your recipe name here"
            sx={{ m: 1, width: '90ch' }}
          />
        </div>
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
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{ fontSize: 20 }}>Upload an Image</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography align="center">
            <Stack direction="row" alignItems="center" spacing={2}>
              <label htmlFor="contained-button-file">
                <Input accept="image/*" id="contained-button-file" multiple type="file"/>
                <Button variant="contained"component="span">
                  <CloudUploadIcon sx={{ fontSize: 40 }} name="image_url"/>
                </Button>
              </label>
            </Stack>
          </Typography>
        </AccordionDetails>
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
