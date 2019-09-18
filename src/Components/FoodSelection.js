import React from "react";

const FoodSelection = ({ selectionItems, selectedFood, setSelectedFood }) => {
  return (
    <div
      className="container d-flex justify-content-center"
      data-test="foodselection"
    >
      <div className="col-sm-6 ">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text">Select food</label>
          </div>
          <select
            className="custom-select"
            id="inputGroupSelect01"
            value={selectedFood}
            onChange={e => setSelectedFood(e.target.value)}
          >
            {selectionItems}
          </select>
        </div>
        <div className="text-center">
          <button
            type="button"
            className="btn btn-info btn-sm "
            data-toggle="modal"
            data-target="#exampleModal"
            data-test="btn-test"
          >
            Add new food
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodSelection;
