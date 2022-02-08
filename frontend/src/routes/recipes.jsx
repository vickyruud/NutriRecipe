import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import RecipeList from "../components/RecipeList";
import '../App.css';

export default function Recipes() {
  const [message, setMessage] = useState("");
  const [recipes, setRecipes] = useState([]);
  const fetchRecipes = () => {
    axios
      .get("/recipes") // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        console.log(response.data[0].name); // The entire response from the Rails API

        // setMessage(response.data[0].name);
        setRecipes(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <main>
      <NavBar login_name={"Final Project"} login_right={1} />
      <h2>{message}</h2>
      <div style={{display:"flex",flexDirection:"row"}} >
      <button onClick={fetchRecipes}>Get Recipe </button>
      <Link to="/">Back to home</Link>
      </div>
      <RecipeList recipes={recipes} />
      
    </main>
  );
}
