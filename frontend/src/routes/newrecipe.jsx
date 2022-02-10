import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from '../components/NewRecipe/Form'
import NavBar from '../components/NavBar'

const NewRecipe = () => {
  const [categories, setCategories] = useState([]);
  const fetchCategories = () => {
    axios
    .get("/recipes/categories")
    .then((response) => {
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
      <NavBar />
      <Form categories={categories}/>
    </main>
  );
}
export default NewRecipe