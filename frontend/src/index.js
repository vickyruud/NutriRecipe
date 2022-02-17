import React from 'react';
import './index.css';
import App from './App';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Recipes from "./routes/recipes";
import NewRecipe from "./routes/newrecipe";
import MyRecipes from "./routes/myrecipes";
import Admin from "./routes/admin";


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  rootElement
);
