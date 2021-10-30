import React from "react";
import "./Subscribe.css";

const Subscribe = () => {
  return (
    <div className="subscribe-sec">
      <div className="container subscribe">
        <div className="ms-4">
          <h4>IT'S TIME FOR DISCOUNTS</h4>
          <h1 className="mt-4 ">
            Subscribe <span className="text-danger">& travel!</span>
          </h1>
          <p className="fw-bold">
            Compellingly embrace empowered e-business after user friendly
            intellectual capital. Interactively actualize front-end processes
            with effective convergence.
          </p>
          <div className="  mt-5">
            <input
              className=" p-3 w-50"
              type="email"
              name=""
              id=""
              placeholder="Enter your Email Address"
            />
            <button className="p-3 ms-2 rounded">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
