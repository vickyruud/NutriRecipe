import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from '../components/NavBar';
import Form from '../components/NewRecipe/Form'

const NewRecipe = () => {
  const [categories, setCategories] = useState([]);
  const fetchCategories = () => {
    axios
    .get("/recipes/categories") // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      console.log(response.data[0].name); // The entire response from the Rails API
      setCategories(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }
  useEffect (()=>{
    fetchCategories()
  },[])

  return (
    <main>
      <NavBar login_name = {'Final Project'} login_right={1} />
      <Form categories={categories}/>

    </main>
  );
}
export default NewRecipe