import React, {useState} from 'react';
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@mui/material';
import './signUp.css'
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';


const Signup = (props) => {
  const paperStyle = { padding: '30px 20px', width: 300, margin: '20px auto' };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: '#0068d3' };
  const textFieldStyle = { margin: '10px 0 0 0' };

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")


    const handleUsernameChange = (evt) => {
        setUsername(evt.target.value)
    }

    const handlePasswordChange = (evt) => {
        setPassword(evt.target.value)
    }
  
    const handleEmailChange = (evt) => {
        setEmail(evt.target.value)
    }

    const handleSubmit = (evt) => {
      evt.preventDefault();
      console.log(email);
        fetch(`http://localhost:3000/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
              username,
              password,
              email
            })
        })
        .then(resp => resp.json())
        .then(data => {
            localStorage.setItem("token", data.jwt)
            props.handleLogin(data.user)
        })
      setUsername("")
      setPassword("")
      setEmail("")
      props.cancel()
    }
   

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
        <form className='signup-form' onSubmit={handleSubmit}>
          <TextField onChange={handleUsernameChange} style={textFieldStyle} variant='standard' fullWidth label='Username' placeholder='Enter your username' autofocus/>
          <TextField onChange={handleEmailChange} style={textFieldStyle} variant='standard' fullWidth label='Email' placeholder='Enter your email'/>
          <TextField onChange={handlePasswordChange}style={textFieldStyle} variant='standard' fullWidth label='Password' type="password" placeholder='Enter a password' />
          <TextField style={textFieldStyle} variant='standard' fullWidth label='Confirm Password' type="password" placeholder='Confirm your password' />
          <div className='signup-buttons'>
          <Button id='signup-submit-button' type='submit' variant='contained' color='primary'>Sign up</Button>
          <Button id='signup-submit-button' onClick={props.cancel} variant='contained' color='primary'>Cancel</Button>
          </div>
        </form>
      </Paper>
    </Grid>
  )
}

export default Signup;