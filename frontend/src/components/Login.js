import React, { useEffect, useState } from 'react';
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@mui/material';
import './login.css'
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import axios from 'axios';


const Login = () => {
  const paperStyle = { padding: '30px 20px', width: 300, margin: '20px auto' };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: '#0068d3' };
  const textFieldStyle = { margin: '10px 0 0 0' };
  const loginButtonStyle = {margin: '10px 0 0 0'}

  const [user, setUser] = useState('');
  
  const userLogin = (user) => {
    axios.get('/auto_login', {
      headers: {
        "content-type": "application/json"
      },
      body: {email: user.email, password: user.password } 
    }, user) 
    .then((resp) => {
      // handle success
      localStorage.setItem("token", resp.data.token)
      setUser(resp.data.user);
      console.log(resp.data);
    })
   
  }
  useEffect(() => {
    if (localStorage.getItem("token")) {
      axios.post('/login', {
        headers: {"Authenticate": localStorage.token}
      })
        .then(resp => {
          setUser(user);
      })
    }
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      username: event.target[0].value,
      password: event.target[1].value
    } 
    userLogin(user)
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
          <TextField style={textFieldStyle} variant='standard' fullWidth label='Username' placeholder='Enter your username' />
          <TextField style={textFieldStyle} variant='standard' fullWidth label='Password' type="password" placeholder='Enter a password' />
          <Button style={loginButtonStyle} type='submit' variant='contained' color='primary'>Login in</Button>
          
        </form>
      </Paper>
    </Grid>
  )
}

export default Login;