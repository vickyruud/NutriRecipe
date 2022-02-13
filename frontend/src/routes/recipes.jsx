import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import RecipeList from "../components/RecipeList";
import "../App.css";
import RecipePage1 from "../components/RecipePage1";

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [selectRecipe, setSelectRecipe] = useState(null);
  const fetchRecipes = () => {
    axios
      .get("/recipes") // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success

        setRecipes(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  

  useEffect(() => {
    fetchRecipes();
  }, []);
  return (
    <main>
      <div style={{ display: "flex", flexDirection: "row" }}></div>
      {selectRecipe ? (
        <RecipePage1 selectRecipe={selectRecipe} />
      ) : (
        <RecipeList setSelectRecipe={setSelectRecipe} recipes={recipes} />
      )}
    </main>
  );
}
