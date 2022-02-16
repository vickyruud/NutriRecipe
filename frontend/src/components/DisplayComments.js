import React from 'react'
import OneComment from './OneComment';
import { Box } from '@mui/system';

const DisplayComments = (props) => {
  console.log(props.comments.comments);

  const arrayOfComments = props.comments.comments.map(comment => {
    if (props.list.id === comment.recipe_id) {
      console.log(comment.recipe_id);
      return <OneComment comment={comment} users={props.comments.users} />      
    }
  })
  return (
    <Box >
      <h1>Comments</h1>
      {arrayOfComments}
    </Box>
    
  )
}

export default DisplayComments