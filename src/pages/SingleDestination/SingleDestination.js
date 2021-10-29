import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./SingleDestination.css";

const SingleDestination = () => {
  const [details, setDetails] = useState([]);
  const { destinationId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/destination/${destinationId}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  const handleBooking = () => {
    alert("Added to cart successfully");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 p-3">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h1>{details.name}</h1>
            <h4>{details.description}</h4>
            <h3 className="text-warning">${details.price}</h3>
            <p>{details.days} days tour</p>
          </div>
          <div className="text-center">
            <Link to="/cart">
              <button onClick={handleBooking} className="btn btn-primary">
                Book Now
              </button>
            </Link>
          </div>
        </div>
        <div className="col-md-6">
          <img src={details.img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SingleDestination;
