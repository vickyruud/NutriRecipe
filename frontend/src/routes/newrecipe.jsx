import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from '../components/NewRecipe/Form'
import NavBar from '../components/NavBar'
import { useNavigate } from 'react-router';

const NewRecipe = (props) => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
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

  const saveRecipe = (recipe) => {

    axios
    .post("/recipe", recipe)
    .then(() => {
      console.log ('Recipe saved!');
      navigate('/');
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
      <Form saveRecipe ={saveRecipe} cates={categories} recipe={props.recipe || {}}/>
    </main>
  );
}
export default NewRecipe