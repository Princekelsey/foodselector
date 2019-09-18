import React from "react";
import "./App.css";
import FavoriteFoods from "./Components/FavoriteFoods";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div data-test="app-test">
      <NavBar />
      <div className="container">
        <FavoriteFoods />
      </div>
    </div>
  );
}

export default App;
