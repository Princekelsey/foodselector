import React, { useState } from "react";
import FoodSelection from "./FoodSelection";
import FoodInput from "./FoodInput";
import DisplayResult from "./DisplayResult";

const FavoriteFoods = () => {
  const [foods, setfoods] = useState([
    { name: "pizza", value: "pizza" },
    { name: "hamburger", value: "hamburger" },
    { name: "salad", value: "salad" }
  ]);
  const [selectedFood, setSelectedFood] = useState("");
  const [newFood, setNewFood] = useState("");

  // food selection options
  const selectionItems = foods.map(food => (
    <option key={food.name} value={food.value}>
      {food.name}
    </option>
  ));

  // handle new food input
  const addNewFood = e => {
    e.preventDefault();
    if (newFood === "") {
      alert("Please enter a valid food");
    } else {
      setfoods([...foods, { name: newFood, value: newFood }]);
      setNewFood("");
    }
  };

  return (
    <div className="mt-5 container " data-test="favoriteFoods">
      <div className="row">
        <div className="col-md-12 text-center ">
          <h1 className="display-6 text-warning">MY FAVORITE FOOD</h1>
          <p className="lead text-white">choose your favorite food</p>
        </div>
        <FoodSelection
          selectionItems={selectionItems}
          selectedFood={selectedFood}
          setSelectedFood={setSelectedFood}
        />
        <FoodInput
          newFood={newFood}
          setNewFood={setNewFood}
          addNewFood={addNewFood}
        />
        {selectedFood === "" ? null : (
          <DisplayResult
            selectedFood={selectedFood}
            setSelectedFood={setSelectedFood}
          />
        )}
      </div>
    </div>
  );
};

export default FavoriteFoods;
