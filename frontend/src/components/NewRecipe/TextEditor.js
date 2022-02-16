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

  const onEditorChange = event => {
    const plainText = event.getCurrentContent().getPlainText() // for plain text
    props.recipe.steps=plainText;
 
  }

  return (
    <Box>
      <ThemeProvider theme={myTheme}>
        <MUIRichTextEditor
          label="Share your great recipe here..."
          onSave={save}
          onChange={onEditorChange}
          inlineToolbar={true}
          height={30}
        />
      </ThemeProvider>
    </Box>
    

  );
}
export default TextEditor