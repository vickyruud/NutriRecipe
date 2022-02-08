import React from "react"
import NavBar from '../components/NavBar';
import Form from '../components/NewRecipe/Form'

export default function NewRecipe() {

  return (
    <main>
      <NavBar login_name = {'Final Project'} login_right={1} />
      This is New Recipe page
      <Form />

    </main>
  );
}