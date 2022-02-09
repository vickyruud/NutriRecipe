import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";

const App = (props) => {
  // Instantiation

  const [user, setUser] = useState({});

  const createUser = (user) => {
    axios.post("/users", user).then((resp) => {
      // handle success
      console.log(resp.data.token);
      localStorage.setItem("token", resp.data.token);
      setUser(resp.data.user);
    });
  };

  const signUp = (event) => {
    event.preventDefault();
    const user = {
      username: event.target[0].value,
      email: event.target[1].value,
      password: event.target[2].value,
    };
    createUser(user);
  };

  // const fetchRecipes = () => {
  //   axios.get('/api/recipes') // You can simply make your requests to "/api/whatever you want"
  //   .then((response) => {
  //     // handle success
  //     console.log(response.data) // The entire response from the Rails API

  //       console.log(response); // Just the message
  //       this.setState({
  //         message: response.data[0].name,
  //       });
  //     });
  //   })

  return (
    <div className="App">
      <NavBar login_name={"Final Project"} login_right={1} />
      {/*<NavBar login_name = {'Registered User'} login_right={0} /> */}
      {/* <NavBar login_name = {''} /> {/* Unregistered User */}
      <h1>Welcome</h1>
      <Link to="/users">User</Link> ||
      <Link to="/recipes">Recipes</Link>
      {/* <Login></Login> */}
      <Signup signUp={signUp} />
      <Login />
    </div>
  );
};

export default App;
