import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import RecipeList from "../components/RecipeList";
import "../App.css";
import RecipePage from "../components/RecipePage";

export default function Recipes() {
  const [message, setMessage] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [selectRecipe, setSelectRecipe] = useState(null);
  const fetchRecipes = () => {
    axios
      .get("/recipes") // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success

        // setMessage(response.data[0].name);
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
      {/* <NavBar login_name={"Final Project"} login_right={1} /> */}
      <h2>{message}</h2>
      <div style={{ display: "flex", flexDirection: "row" }}></div>
      {selectRecipe ? (
        <RecipePage selectRecipe={selectRecipe} />
      ) : (
        <RecipeList setSelectRecipe={setSelectRecipe} recipes={recipes} />
      )}
    </main>
  );
}
