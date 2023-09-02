import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react";

function App() {
  const [isDarkMode, setDarkMode] = useState(false)
  const appClass = isDarkMode ? "App dark" : "App light"
  const showMode = isDarkMode ? "Dark Mode" : "Light Mode"

function handleDarkMode() {
  setDarkMode(!isDarkMode)
}

return (
  <div className={appClass}>
    <header>
      <h2>Shopster</h2>
      <button onClick = {handleDarkMode}>{showMode}</button>
    </header>
    <ShoppingList items={itemData}/>
  </div>
)}

export default App;
