import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from '../components/NewRecipe/Form'
// import Show from '../components/NewRecipe/Show'; // Recipe detail page
import Show from '../components/RecipePage1'; // Recipe detail page
import Empty from '../components/My Recipes/Empty'; // Main page
import Status from '../components/NewRecipe/Status';
import Confirm from '../components/NewRecipe/Confirm';
import Error from '../components/NewRecipe/Error';
import useVisualMode from '../components/NewRecipe/hooks/useVisualMode';
import None from '../components/My Recipes/SimpleAlert';

export default function MyRecipes(props) {
  console.log('props: ',props);
  const EMPTY = "EMPTY";
  const NONE = "NONE";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETING = "DELETING";
  const CONFIRM = "CONFIRM";
  const EDIT = "EDIT";
  const ERROR_SAVE = "ERROR_SAVE";
  const ERROR_DELETE = "ERROR_DELETE";
  const ERROR_SAVE_VALIDATION = "ERROR_SAVE_VALIDATION";
  const ERROR_LOAD = "ERROR_LOAD";

  const [categories, setCategories] = useState([]);
  const [recipe, setRecipe] = useState({});
  const [recipes, setRecipes] = useState([]);
  const [comments, setComments] = useState([]);
  const [ratings,setRatings] = useState([]);
  const user = props.user;
  let initial_recipe = recipe ? recipe : {} //for Edit mode

  const fetchMyRecipes = (user) => {
    if(!user.id) {
      return
    }
    console.log('user line 37 fetch My Recipes: ', user);
    axios
      .get("/recipes") // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        console.log('all recipes:', response.data);
        console.log('user: ',user)
        let filtered = response.data.filter(recipe => {
          if (recipe.user_id === user.id) {
            return convertRecipeToShowUI(recipe);
          }
        })
        console.log('filtered:', filtered);
        transition(EMPTY);
        setRecipes(filtered);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const fetchCategories = () => {
    axios
    .get("/categories")
    .then((response) => {
      setCategories(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  const fetchComments = ()=> {
    axios
      .get("/comments")
      .then((response) =>{
        setComments(response.data);
      })
      .catch((err) =>{
        console.log(err);
      })
  }

  const fetchRecipes = () => {
    axios
      .get("/recipes") 
      .then((response) => {
        setRecipes(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchRatings = ()=> {
    axios
      .get("/ratings")
      .then((response) =>{
        console.log("ratings----->",response.data)
        setRatings(response.data);
      })
      .catch((err) =>{
        console.log(err);
      })
  }

  const convertRecipeToSaveDB = (recipeUI) => {
    let json_ingredients = JSON.stringify(recipeUI.ingredients);
    let recipeDB = {...recipeUI, "ingredients": json_ingredients};
    // let string_steps = String(recipeUI.steps);
    // recipeDB = {...recipeUI, "steps": string_steps};
    return recipeDB;
  }
  const convertRecipeToShowUI = (recipeDB) => {
    let string_ingredients = eval(recipeDB.ingredients);
    let recipeUI = {...recipeDB, "ingredients": string_ingredients};
  //  // let string_steps=String(recipeDB.steps);
  //   recipeUI = {...recipeDB, "steps": string_steps};
    return recipeUI;
  }

  const saveRecipe = (inputRecipe) => {
   if (!inputRecipe
    || inputRecipe.name === null
    || !inputRecipe.ingredients
    || inputRecipe.ingredients.indexOf([{name:"",unit:"",quantity:0}]) >= 0
    || inputRecipe.category_id === null
    || inputRecipe.estimated_time === null
    || inputRecipe.description === null
    || inputRecipe.serving_size === null
    || inputRecipe.steps === null
    || inputRecipe.image_url === null
    ) {
      setRecipe(inputRecipe);
      transition(ERROR_SAVE_VALIDATION, false);
    } else {
      transition(SAVING);
      //inputRecipe={...recipe};
      inputRecipe.user_id = props.user.id
      let recipeDB = convertRecipeToSaveDB(inputRecipe);
      console.log("recipe before saving to DB:",recipeDB)
      if (!recipe) {
        axios
        .post("/recipes", recipeDB)
        .then((response) => {
          let tempRecipe = {...response.data};
          setRecipe(()=>convertRecipeToShowUI(tempRecipe))
          console.log('recipe to show on UI after converted to string:',recipe)
          transition(SHOW)
        })
        .catch(error => {
          console.log('error', error);
          transition(ERROR_SAVE, true);
        })
      } else {
        axios
        .put(`/recipes/${recipe.id}`,recipe)
        .then((response) => {
          let tempRecipe = {...response.data};
          setRecipe(()=>convertRecipeToShowUI(tempRecipe));
          transition(SHOW)
        })
        .catch(error => {
          console.log('error', error);
          transition(ERROR_SAVE, true);
        })
      }
      
    }
  }

  function destroy(recipe, user) {
    transition(DELETING, true);
    console.log(`Deleting recipe id = ${recipe.id}`);
    axios
    .delete(`/recipes/${recipe.id}`, recipe)
    .then((response)=>{
      let filtered = response.data.filter(recipe => {
        if (recipe.user_id === user.id) {
          let temp_recipe = convertRecipeToShowUI(recipe);
          return temp_recipe;
        }
      })
      console.log(filtered);
      setRecipes(filtered);
      recipes.length > 0 ? transition(EMPTY) : transition(NONE);
    })
    .catch(error => {
      console.log(error);
      transition(ERROR_DELETE);
    })
  }

  const viewRecipe = (recipe) => {
    setRecipe(recipe);
    transition(SHOW);
  }

  const editRecipe = (recipe) => {
    setRecipe(recipe);
    transition(EDIT);
  }

  const confirmRecipe = (recipe) => {
    setRecipe(recipe);
    transition(CONFIRM);
  }

  const addRecipe = () => {
    setRecipe(null);
    transition(CREATE);
  }

  useEffect (()=>{
    fetchMyRecipes(user);
  },[user]);

  useEffect (()=>{
    fetchCategories();
    fetchComments();
    fetchRatings();
  },[]);

  let temp_mode = recipes.length > 0 ? "EMPTY" : "NONE";
  if (props.mode) {
    if (props.mode !== "EMPTY" && props.mode !== "NONE") {
      temp_mode = props.mode;
  }}

  const { mode, transition, back } = useVisualMode(temp_mode);

  console.log(mode);
  console.log(user);

  return (
  
    <div>
      {mode === NONE && 
        <None 
        title={"No Recipe Found!"}
        content={"You have no recipe."}
        emph={"Let's create one now!"}
        // url={"/newrecipe"}
        onClick={addRecipe}
      />}
      {mode === EMPTY && <Empty 
        viewRecipe={viewRecipe}
        onEdit={editRecipe}
        onDelete={confirmRecipe}
        onAdd={addRecipe}
        setSelectRecipe={setRecipe}
        recipes={recipes}
        user={props.user}
        comments = {comments}
        ratings={ratings}
      />}
      {mode === SHOW &&
        <Show
          // selectRecipe={props.recipe}
          selectRecipe={recipe}
          user={props.user}
          onEdit={editRecipe}
          onDelete={confirmRecipe}
          comments = {comments}
          ratings={ratings}
        />
        }
      {mode === CREATE && 
        <Form 
          cates={categories}
          onCancel={back}
          onSave={saveRecipe}
          ratings={ratings}
        />
      }
      {mode === SAVING && <Status message = {'Saving...'} />}
      {mode === DELETING && <Status message = {'Deleting...'} />}
      {mode === CONFIRM && <Confirm message = {'Delete?... Really?'} user={user} onCancel={back} onConfirm={() => destroy(recipe,user)}/>}
      {mode === EDIT && <Form 
        cates={categories}
        ratings={ratings}
        recipe={initial_recipe}
        onCancel={back}
        onSave={saveRecipe}
      />}
      {mode === ERROR_SAVE && <Error message={'Error saving encountered. Sorry!'} onClose={back} />}
      {mode === ERROR_DELETE && <Error message={'Error deleting encountered. Sorry!'} onClose={back} />}
      {mode === ERROR_SAVE_VALIDATION && <Error message={'Please fill data in all required fields (*)'} onClose={back} />}
      {mode === ERROR_LOAD && <Error message={'Error loading data encountered. Sorry!'} onClose={back} />}
    </div>
  )
}
