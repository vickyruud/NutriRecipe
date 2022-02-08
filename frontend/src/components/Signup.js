import React from 'react';
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@mui/material';
import './signUp.css'
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';


const Signup = (props) => {
  const paperStyle = { padding: '30px 20px', width: 300, margin: '20px auto' };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: '#1bbd7e' };
  const textFieldStyle = { margin: '10px 0 0 0' };

  return (
    <Grid>
      <Paper elevation={20} style = {paperStyle} id="signup-paper">
        <Grid align='center'>
          <Avatar style={avatarStyle}>
          <DinnerDiningIcon />
          </Avatar>
          <h2 style ={headerStyle}>Sign Up</h2>
          <Typography variant='caption'>Please fill this form to create an account</Typography>
        </Grid>
        <form className='signup-form' onSubmit={props.signUp}>
          <TextField style={textFieldStyle} variant='standard' fullWidth label='Username' placeholder='Enter your username' />
          <TextField style={textFieldStyle} variant='standard' fullWidth label='Email' placeholder='Enter your email'/>
          <TextField style={textFieldStyle} variant='standard' fullWidth label='Password' type="password" placeholder='Enter a password' />
          <TextField style={textFieldStyle} variant='standard' fullWidth label='Confirm Password' type="password" placeholder='Confirm your password' />
          <Button id='signup-submit-button' type='submit' variant='contained' color='primary'>Sign up</Button>
          
        </form>
      </Paper>
    </Grid>
  )
}

export default Signup;