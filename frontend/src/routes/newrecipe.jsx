import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from '../components/NewRecipe/Form'
import NavBar from '../components/NavBar'

const NewRecipe = (props) => {
  const [categories, setCategories] = useState([]);
  const [recipe, setRecipe] = useState(props.recipe || {});

  const fetchCategories = () => {
    axios
    .get("/recipes/categories")
    .then((response) => {
      setCategories(response.data);
      console.log('Categories received from Database:');
      console.log(response.data);
      console.log('Categories assigned to categories variable:');
      console.log(categories[0]);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  const saveRecipe = () => {
    axios
    .post("/recipe", recipe)
    .then((response) => {
      console.log ('Recipe saved!');
      console.log(response.message);
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
      <Form recipe = {recipe} saveRecipe ={saveRecipe} cates={categories}/>
    </main>
  );
}
export default NewRecipe