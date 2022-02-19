import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from '../components/NewRecipe/Form'
// import Show from '../components/NewRecipe/Show'; // Recipe detail page
import Show from '../components/RecipePage1'; // Recipe detail page
import Empty from '../components/RecipeList'; // Main page
import Status from '../components/NewRecipe/Status';
import Confirm from '../components/NewRecipe/Confirm';
import Error from '../components/NewRecipe/Error';
import useVisualMode from '../components/NewRecipe/hooks/useVisualMode';
import None from '../components/My Recipes/SimpleAlert'

export default function MyRecipes(props) {
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
  const [recipes, setRecipes] = useState(props.myRecipes || []);
  const [comments, setComments] = useState([]);
  //const [myRecipes, setMyRecipes] = [props.myRecipes, props.setMyRecipes];
  const [ratings,setRatings] = useState([]);
  const user = props.user;

  const fetchMyRecipes = (user) => {
    axios
      .get("/recipes") // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        console.log(response.data);
        let filtered = response.data.filter(recipe => {
          if (recipe.user_id === user.id) {
            return convertRecipeToShowUI(recipe);
          }
        })
        console.log(filtered);
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
      .get("/recipes") // You can simply make your requests to "/api/whatever you want"
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
   if (recipe.name === null
    || recipe.ingredients === null 
    || recipe.category_id === null
    || recipe.estimated_time === null
    || recipe.description === null
    || recipe.serving_size === null
    || recipe.steps === null
    || recipe.image_url === null
    ) {
      transition(ERROR_SAVE_VALIDATION, true);
    } else {
      transition(SAVING);
      inputRecipe={...recipe};
      inputRecipe.user_id = props.user.id
      let recipeDB = convertRecipeToSaveDB(inputRecipe);
      if (!recipe.id) {
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

  useEffect (()=>{
    fetchCategories();
  },[]);

  useEffect (()=>{
    fetchMyRecipes(user);
    fetchComments();
    fetchRatings();
  },[]);

  let temp_mode = "EMPTY";
  if (props.mode === "EMPTY" && recipes.length === 0) {
    temp_mode = "NONE";
  } else {
    temp_mode = props.mode;
  }
  const { mode, transition, back } = useVisualMode(temp_mode);

  console.log(mode);


  return (
  
    <div>
      {mode === NONE && 
        <None 
        title={"No Recipe Found!"}
        content={"You have no recipe."}
        emph={"Let's create one now!"}
        url={"/newrecipe"}
        onClick={()=>transition("CREATE")}
      />}
      {mode === EMPTY && <Empty 
        viewRecipe={viewRecipe}
        onEdit={editRecipe}
        onDelete={confirmRecipe}
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
        />}
      {mode === CREATE && 
        <Form 
          cates={categories}
          onCancel={back}
          onSave={saveRecipe}
          setRecipe={setRecipe}
          recipe={recipe}
          ratings={ratings}
        />}
      {mode === SAVING && <Status message = {'Saving...'} />}
      {mode === DELETING && <Status message = {'Deleting...'} />}
      {mode === CONFIRM && <Confirm message = {'Delete? ... Really?'} user={user} onCancel={back} onConfirm={() => destroy(recipe,user)}/>}
      {mode === EDIT && <Form 
        cates={categories}
        recipe={recipe}
        onCancel={back}
        onSave={saveRecipe}
        setRecipe={setRecipe}
        ratings={ratings}
        mode="EDIT"/>}
      {mode === ERROR_SAVE && <Error message={'Error saving encountered. Sorry!'} onClose={back} />}
      {mode === ERROR_DELETE && <Error message={'Error deleting encountered. Sorry!'} onClose={back} />}
      {mode === ERROR_SAVE_VALIDATION && <Error message={'Please fill data in all required fields (*)'} onClose={back} />}
      {mode === ERROR_LOAD && <Error message={'Error loading data encountered. Sorry!'} onClose={back} />}
    </div>
  )
}
