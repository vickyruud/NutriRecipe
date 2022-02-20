import React from 'react'
import Alert from '@mui/material/Alert';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import './ratingUpdated.css'


const RatingUpdated = (props) => {
  console.log(props);
  return (
    <>
      {props.error && <Alert severity="error">Error Saving Rating!</Alert>}
      {!props.error && <Alert severity="success" onClick={() => props.setRatingUpdated(0)}>Rating {props.message} successfully!! Click here to close.</Alert>}
    </>
  );
}


export default RatingUpdated