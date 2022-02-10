import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Button  from "./components/Button";


const App = (props) => {
  // Instantiation


  const [user, setUser] = useState({})
  const [show, setShow] = useState("SignUp")


  useEffect(() => {
    const token = localStorage.getItem("token")

    if(token !== null){
      fetch(`http://localhost:3000/auto_login`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(resp => resp.json())
      .then(data => {
        setUser(data)
        console.log(data)
      })
    } else {
      setUser('');
    }
  }, [])

  const handleLogin = (user) => {
    setUser(user)
  }  
  const logout = (e) => {
  e.preventDefault();
  setUser('');
  localStorage.removeItem("token");
  }
  
  const showLogin = () => {
    setShow("Login")

  }
  
  const showSignup = () => {
    setShow("signUp")
  }

  const renderForm = () => {
    if (show === 'Login') {
      return <Login handleLogin={handleLogin} />
      
    } else {
      return <Signup handleLogin={handleLogin}/>

    }
      
        
    
  }

  return (
    <div className="App">
      {user && <NavBar login_name={user.username} login_right={1} logout={logout} />}
      {!user && <NavBar login_name={""} login_right={1} logout={logout} />}
      <div className="main">

      {/*<NavBar login_name = {'Registered User'} login_right={0} /> */}
      {/* <NavBar login_name = {''} /> {/* Unregistered User */}
      <h1>Welcome</h1>
      <Link to="/users">User</Link> ||
      <Link to="/recipes">Recipes</Link>
      {!user &&<Button  onClick={showSignup} id='signup-submit-button' type='submit' variant='contained' color='primary'>Sign up</Button>}
      {!user && <Button onClick={showLogin} id='signup-submit-button' type='submit' variant='contained' color='primary'>Login</Button>}
      {!user && renderForm()}
      {user && <div>{user.username} <Button onClick={logout} >Log Out </Button></div>}
      </div>
    </div>
  );
};

export default App;