import React from "react";

const DisplayResult = ({ selectedFood, setSelectedFood }) => {
  return (
    <div className="container d-flex justify-content-center pt-4">
      <div className="card text-center">
        <div className="card-header"></div>
        <div className="card-body">
          <h5 className="card-title">Your Special Food</h5>
          <p className="card-text">
            Hey! your favourite food is {selectedFood}
          </p>
          <button
            type="button"
            className="btn btn-danger btn-sm"
            onClick={e => setSelectedFood("")}
          >
            clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisplayResult;
