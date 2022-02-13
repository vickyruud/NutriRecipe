import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from './Form'
import Show from './Show'; // Recipe detail page
import Empty from './Empty'; // Main page
import Status from './Status';
import Confirm from './Confirm';
import Error from './Error';
import useVisualMode from './hooks/useVisualMode';
import { useNavigate } from 'react-router';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Recipes from "../../routes/recipes";

export default function Recipe(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETING = "DELETING";
  const CONFIRM = "CONFIRM";
  const EDIT = "EDIT";
  const ERROR_SAVE = "ERROR_SAVE";
  const ERROR_DELETE = "ERROR_DELETE";
  const ERROR_SAVE_VALIDATION = "ERROR_SAVE_VALIDATION";

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

  const fetchRecipe = (id) => {
    axios
      .get("/recipes/id") // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        console.log(response.data[0].name); // The entire response from the Rails API

        // setMessage(response.data[0].name);
        props.setRecipe(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const saveRecipe = (recipe) => {/*
   if (recipe.name === '' 
    || recipe.ingredients === null 
    || recipe.category_id === ''
    || recipe.estimated_time
    || recipe.description ===''
    || recipe.serving_size === ''
    || recipe.steps === ''
    || recipe.image_url === ''
    ) {
      transition(ERROR_SAVE_VALIDATION);
    } else {*/
      transition(SAVING);
      recipe.user_id = 1 //hard-coded
      let json_ingredients = JSON.stringify(recipe.ingredients);
      recipe.ingredients = json_ingredients;
      axios
      .post("/recipe", recipe)
      .then((response) => {
        let recipe = {...response.data}; 
        // axios
        // .get(`recipe/${recipe.id}`)
        console.log(recipe);
        console.log ('Recipe saved!');
        transition(SHOW);
      })
      .catch((err) => {
        console.log(err);
        transition(ERROR_SAVE, true);
      });
    /*}*/
  }

  const { mode, transition, back } = useVisualMode(
    props.recipe ? SHOW  : CREATE
  );

  function destroy(recipe) {
    transition(DELETING, true);
    axios
    .post("/recipe/delete", recipe)
    .then(
      transition(EMPTY)
    )
    .catch(error => {
      console.log(error);
      transition(ERROR_DELETE);
    })
  }

  useEffect (()=>{
    fetchCategories()
  },[])

  return (
  
    <div>
     
      {mode === EMPTY && <Empty onAdd={()=>transition(CREATE)} />}
      {mode === SHOW && (
       
        <Show
          selectRecipe = {props.recipe}
        />
      )}
      {mode === CREATE && <Form cates={categories} onCancel={back} onSave={saveRecipe} onDelete={destroy}/>}
      {mode === SAVING && <Status message = {'Saving...'} />}
      {mode === DELETING && <Status message = {'Deleting...'} />}
      {mode === CONFIRM && <Confirm message = {'Delete? ... Really?'} onCancel={back} onConfirm={(recipe) => destroy(recipe)}/>}
      {mode === EDIT && <Form cates={categories} recipe={props.recipe} onCancel={back} onSave={saveRecipe} onDelete={destroy}/>}
      {mode === ERROR_SAVE && <Error message={'Error saving encountered. Sorry!'} onClose={back} />}
      {mode === ERROR_DELETE && <Error message={'Error deleting encountered. Sorry!'} onClose={back} />}
      {mode === ERROR_SAVE_VALIDATION && <Error message={'Please fill data in all required fields (*)'} onClose={back} />}
    </div>
  )
}