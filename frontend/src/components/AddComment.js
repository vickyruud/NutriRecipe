import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import './addComment.css'
import axios from "axios";
import { Paper, Grid } from '@mui/material';




const AddComment = (props) => {

  const [commentValue, setCommentValue] = useState('');
  const handleCommentChange = (value) => {
    setCommentValue(value);
  }


  const submitComment = (comment) => {
    if   (comment !== null) {
      axios
        .post("/comments", comment)
        .then(resp => {
          props.fetchComments();
          setCommentValue('')

        })
    }
  }
  
  const handleCommentSubmit = (event) => {
    event.preventDefault();
    const comment = {
      user_id: props.user.id,
      recipe_id: props.list.id,
      value: commentValue
    }
    submitComment(comment);
    props.hideComment();


  }


  const buttonStyle = { margin: '10px 0 0 0' }
  const paperStyle = { padding: '30px 20px', width: 500, margin: '20px auto' };


  return (
   <Grid>
      <Paper elevation={20} style = {paperStyle} id="login-paper">
        <Grid align='center'>
          <Box
            component="form"
            sx={{
            '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off">
          
          Add your comment below:
          <TextField required name="name" label='Add Comment' variant="outlined" onChange={e => handleCommentChange(e.target.value)} defaultValue={commentValue} autoFocus/>
          </Box>
          <div className='comment-buttons'>
          <Button onClick={handleCommentSubmit} style={buttonStyle} variant='contained' color='primary'>Submit</Button>
          <Button onClick={props.hideComment} style={buttonStyle} variant='contained' color='primary'>Cancel</Button>
          </div>

        </Grid>

      </Paper>
    </Grid>
  )
}

export default AddComment