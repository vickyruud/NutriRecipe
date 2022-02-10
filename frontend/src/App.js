import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Button } from "@mui/material";


const App = (props) => {
  // Instantiation


 const [user, setUser] = useState({})

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

 

  const handleAuthClick = () => {
    const token = localStorage.getItem("token")
    fetch(`http://localhost:3000/user_is_authed`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
  }
  console.log(user);

  
    const logout = (e) => {
    e.preventDefault();
    setUser('');
    localStorage.removeItem("token");
  }

  return (
    <div className="App">
      {user && <NavBar login_name={user.username} login_right={1} logout={logout} />}
      {!user && <NavBar login_name={""} login_right={1} logout={logout} />}
      {/*<NavBar login_name = {'Registered User'} login_right={0} /> */}
      {/* <NavBar login_name = {''} /> {/* Unregistered User */}
      <h1>Welcome</h1>
      <Link to="/users">User</Link> ||
      <Link to="/recipes">Recipes</Link>
      {/* <Login></Login> */}
      {/* {!user && <Signup signUp={signUp} />} */}
      {/* <Signup signUp={signUp} logout={logout} /> */}
     
      <Button onClick={handleAuthClick} >Access authorized route </Button>

      {!user && <Login handleLogin={handleLogin}/>}

      {!user && <Signup handleLogin={handleLogin}/>}
      
      
      

      {user && <div>{user.username} <Button onClick={logout} >Log Out </Button></div>}
    </div>
  );
};

export default App;