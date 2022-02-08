import React from "react"
import axios from 'axios';
import NavBar from '../components/NavBar';
import Form from '../components/NewRecipe/Form'

export default function NewRecipe() {



  return (
    <main>
      <NavBar login_name = {'Final Project'} login_right={1} />
      <Form />
    </main>
  );
}