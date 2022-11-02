import React from "react";

const Flavor1 = () => {
  return (
    <div>
      <h2>Choose Your 1st Flavor</h2>
      <p>Select One</p>
      <div className="container">
        <div className="row">
          <div class="card mx-2 my-2 green active font-weight-bold bg-grid">
            <div class="card-body">Creamy Super Max</div>
          </div>
          <div class="card mx-2 my-2 green  font-weight-bold  bg-grid">
            <div class="card-body">Creamy Super Max</div>
          </div>
          <div class="card mx-2 my-2 green font-weight-bold  bg-grid">
            <div class="card-body">Creamy Super Max</div>
          </div>
          <div class="card mx-2 my-2 green font-weight-bold  bg-grid">
            <div class="card-body">Creamy Super Max</div>
          </div>
          <div class="card mx-2 my-2 green font-weight-bold  bg-grid">
            <div class="card-body">Creamy Super Max</div>
          </div>
          <div class="card mx-2 my-2 green font-weight-bold  bg-grid">
            <div class="card-body">Creamy Super Max</div>
          </div>
          <div class="card mx-2 my-2 green font-weight-bold  bg-grid">
            <div class="card-body">Creamy Super Max</div>
          </div>
          <div class="card mx-2 my-2 green font-weight-bold  bg-grid">
            <div class="card-body">Creamy Super Max</div>
          </div>
          <div class="card mx-2 my-2 green font-weight-bold  bg-grid">
            <div class="card-body">Creamy Super Max</div>
          </div>
          <div class="card mx-2 my-2 green font-weight-bold  bg-grid">
            <div class="card-body">Creamy Super Max</div>
          </div>
          <div class="card mx-2 my-2  font-weight-bold  bg-grid">
            <div class="card-body">Creamy Super Max</div>
          </div>
          <div class="card mx-2 my-2 green font-weight-bold  bg-grid">
            <div class="card-body">Creamy Super Max</div>
          </div>
          <div class="card mx-2 my-2 green font-weight-bold  bg-grid">
            <div class="card-body">Creamy Super Max</div>
          </div>
        </div>
        <div className="row mt-5">
          <h4 className="my-3">Special Instructions</h4>
          <textarea
            class="form-control bg-secondary text-white"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
          <button
            type="button"
            class=" my-3 mr-2 btn btn-secondary btn-lg  btn-block col-md-5"
          >
            Cancel
          </button>
          <button
            type="button"
            class=" my-3 ml-2 btn btn-submit btn-lg btn-block col-md-5"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Flavor1;
