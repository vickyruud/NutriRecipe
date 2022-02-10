import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MUIRichTextEditor from "mui-rte";
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
  return (
    <Box>
      <ThemeProvider theme={myTheme}>
        <MUIRichTextEditor
          label="Share your great recipe here..."
          onSave={save}
          inlineToolbar={true}
          height={30}
        />
      </ThemeProvider>
    </Box>
    

  );
}
export default TextEditor