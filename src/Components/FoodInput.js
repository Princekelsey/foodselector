import React from "react";

const FoodInput = ({ newFood, setNewFood, addNewFood }) => {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Modal title
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="input-group">
                <div className="input-group-prepend"></div>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="Enter your favorite food"
                  value={newFood}
                  onChange={e => setNewFood(e.target.value)}
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              data-dismiss="modal"
              onClick={addNewFood}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodInput;
