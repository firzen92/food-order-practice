import React from "react";
import "./App.css";

import Header from './components/Header/Header';
import Meals from './components/Meals/Meals';
import { MealContextProvider } from "./components/context/meal-context";

function App() {
  return <MealContextProvider>
    <Header></Header>
    <Meals></Meals>
  </MealContextProvider>;
}

export default App;
