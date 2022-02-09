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
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import IngredientList from "./IngredientList"


const NewRecipeForm = (props) => {
  const [category, setCategory] = React.useState('');
  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  const categories=[].concat(props.categories)
 
  return (
    <div className="NewRecipe">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>General Information</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '99ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField required id="name" label="Enter an Introduction of your Recipe" variant="outlined" />
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
            id="estimated_time"
            label="Time estimated (mins)"
          />
          <TextField
            required
            id="serving_size"
            label="Serving size"
          />
          <FormControl required variant="standard" sx={{ m: 1, minWidth: 350 }}>
            <InputLabel>Category</InputLabel>
            <Select
              required
              id="category"
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
          <Typography>Ingredient List</Typography>
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
          <Typography>Steps to Make</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '99ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="steps"
                label="Steps"
                multiline
                maxRows={100}
                onChange={handleChange}
                variant="standard"
              />
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
          <Typography>Upload an Image</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '99ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <CloudUploadIcon sx={{
                '& .MuiTextField-root': { m: 1, width: '99ch' },
              }}/>
            </Box>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
export default NewRecipeForm
