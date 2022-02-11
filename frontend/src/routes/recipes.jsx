import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import RecipeList from "../components/RecipeList";
import "../App.css";
import RecipePage from "../components/RecipePage";

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [selectRecipe, setSelectRecipe] = useState(null);
  const fetchRecipes = () => {
    axios
      .get("/recipes") // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        console.log(response.data[0].name); // The entire response from the Rails API

        setRecipes(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // console.log("selectrecipe====>", selectRecipe);
  // console.log("recipes====>", recipes);

  useEffect(() => {
    fetchRecipes();
  }, []);
  return (
    <main>
      <div style={{ display: "flex", flexDirection: "row" }}></div>
      {selectRecipe ? (
        <RecipePage selectRecipe={selectRecipe} />
      ) : (
        <RecipeList setSelectRecipe={setSelectRecipe} recipes={recipes} />
      )}
    </main>
  );
}
