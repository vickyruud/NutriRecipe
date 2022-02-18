import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';




const AddComment = (props) => {
  const buttonStyle = { margin: '10px 0 0 0' }

  return (
    <>
      <Button  onClick={props.hideComment} style={buttonStyle} variant='contained' color='primary'>Cancel</Button>
       <Typography>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '103ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField required name="name" label='Add Comment' variant="outlined" onChange={(e) => console.log(e.target.value)} defaultValue={''}/>
     
        </Box>
       </Typography>
        
    </>
  )
}

export default AddComment