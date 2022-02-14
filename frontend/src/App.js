import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Button  from "./components/Button";
import Recipes from "./routes/recipes";


const App = (props) => {
  // Instantiation


  const [user, setUser] = useState({})
  const [show, setShow] = useState("")


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
    setShow('');
  }
  
  const showLogin = () => {
    setShow("Login")

  }
  
  const showSignup = () => {
    setShow("signUp")
  }

  const removeSignUp = () => {
    setShow("")
  }


  const renderForm = () => {
    if (show === 'Login') {
      return <Login handleLogin={handleLogin} cancel={removeSignUp} />
      
    } else if (show === 'signUp') {
      
      return <Signup handleLogin={handleLogin} cancel={removeSignUp}/>
    }
    else {
      
        return null
    }
      
        
    
  }

  return (
    <div className="App">
      {user && <NavBar logout={logout}  login_name={user.username} login_right={1} logout={logout} />}
      {!user && <NavBar login_name={""} signUp={showSignup} login={showLogin} login_right={1}  />}
      <div className="main">

      {/*<NavBar login_name = {'Registered User'} login_right={0} /> */}
      {/* <NavBar login_name = {''} /> {/* Unregistered User */}
      {!user && renderForm()}
      <Recipes/>
      </div>
    </div>
  );
};

export default App;