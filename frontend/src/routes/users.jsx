import React, { useState } from "react"
import axios from 'axios';
import { Link } from "react-router-dom";
import NavBar from '../components/NavBar';


export default function Users() {

  const [message, setMessage] = useState('Hello')

  const fetchUsers = () => {
    axios.get('/api/users') // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      console.log(response.data[0].name) // The entire response from the Rails API

      setMessage(response.data[0].name);
      
    }) 
  }

  return (
    <main>
      <NavBar login_name = {'Final Project'} login_right={1} />
      <h2>User : {message}</h2>
      <button onClick={fetchUsers}>Get User</button>
      <Link  to="/">Back to home</Link>

    </main>
  );
}