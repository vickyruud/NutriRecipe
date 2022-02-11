import React, {useState} from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MUIRichTextEditor from "mui-rte";
import { convertToRaw, convertFromRaw } from 'draft-js'
import Box from '@mui/material/Box';
const save = (data) => {
  console.log(data);
};

const myTheme = createTheme({
  // Set up your custom MUI theme here
  overrides: {
    MUIRichTextEditor: {
        root: {
            marginTop: 0,
            marginBottom: 40
        }
    }
} 
});
const TextEditor = (props) => {
  const handleChange = (event) => {
    // console.log(event.target.elements);
    // console.log(event.target.value);
    // let newRecipe = {...props.recipe,[event.target.name]:event.target.value};
    // console.log('update recipe');
    // props.recipe= {...newRecipe};
    // console.log(props.recipe);
    console.log(event.target);
  }

  const [value, setValue] = useState('')

  const onEditorChange = event => {
    const plainText = event.getCurrentContent().getPlainText() // for plain text
    const rteContent = convertToRaw(event.getCurrentContent()) // for rte content with text formating
   //convertFromRaw(rawState: RawDraftContentState): ContentState
   //convertToRaw(contentState: ContentState): RawDraftContentState

    rteContent && setValue(JSON.stringify(rteContent)) // store your rteContent to state
    //props.recipe.steps=rteContent;
    props.recipe.steps=plainText;
  }

  return (
    <Box>
      <ThemeProvider theme={myTheme}>
        <MUIRichTextEditor
          label="Share your great recipe here..."
          onSave={save}
          name="steps"
          onChange={onEditorChange}
          inlineToolbar={true}
          height={30}
        />
      </ThemeProvider>
    </Box>
    

  );
}
export default TextEditor