import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import NavBar from './components/NavBar';
import './App.css';
import './components/NavBar'


class App extends Component {
// Instantiation
  constructor(props) {
    super(props)
    this.state = {
      message: ["Click button to fetch"]
    }
  }

  

  fetchRecipes = () => {
    axios.get('api/recipes') // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      console.log(response.data) // The entire response from the Rails API

      console.log(response) // Just the message
      this.setState({
        message: response.data[0].name
      });
    }) 
  }

  render() {
    return (
      
      <div className="App">
        <NavBar login_name = {'Final Project'} login_right={1} /> 
        {/*<NavBar login_name = {'Registered User'} login_right={0} /> */}
        {/* <NavBar login_name = {''} /> {/* Unregistered User */}
        <h1>{ this.state.message }</h1>
        <Link  to="/users">User</Link> ||
        <Link  to="/recipes">Recipes</Link>
      </div>
      
    );
  }
}

export default App;
