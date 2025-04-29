import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // Define a state variable for dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle function
  const handleDarkModeToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Apply class based on state
  const appClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeToggle}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;