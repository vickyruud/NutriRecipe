import React, { useState } from 'react';
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@mui/material';
import './login.css'
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';


const Login = (props) => {
  const paperStyle = { padding: '30px 20px', width: 300, margin: '20px auto' };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: '#0068d3' };
  const textFieldStyle = { margin: '10px 0 0 0' };
  const loginButtonStyle = {margin: '10px 0 0 0'}

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

    const handleUsernameChange = (evt) => {
        setUsername(evt.target.value)
    }

    const handlePasswordChange = (evt) => {
        setPassword(evt.target.value)
    }
   

    const handleSubmit = (evt) => {
        evt.preventDefault()
        fetch(`http://localhost:3000/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
              username,
              password,
            })
        })
        .then(resp => resp.json())
        .then(data => {
          localStorage.setItem("token", data.jwt)
          props.handleLogin(data.user)
        })
      setUsername("")
      setPassword("")
      props.cancel()
    }
    
  
  

  
  return (
    <Grid>
      <Paper elevation={20} style = {paperStyle} id="login-paper">
        <Grid align='center'>
          <Avatar style={avatarStyle}>
          <DinnerDiningIcon />
          </Avatar>
          <h2 style ={headerStyle}>Login</h2>
        </Grid>
        <form className='login-form' onSubmit={handleSubmit}>
          <TextField onChange={handleUsernameChange} style={textFieldStyle} variant='standard' fullWidth label='Username' placeholder='Enter your username' />
          <TextField onChange={handlePasswordChange} style={textFieldStyle} variant='standard' fullWidth label='Password' type="password" placeholder='Enter a password' />
          <div className='signup-buttons'>
          <Button style={loginButtonStyle} type='submit' variant='contained' color='primary'>Login</Button>
          <Button  onClick={props.cancel} style={loginButtonStyle} variant='contained' color='primary'>Cancel</Button>
          </div>
        </form>
      </Paper>
    </Grid>
  )
}

export default Login;