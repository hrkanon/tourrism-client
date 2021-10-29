import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Destinations.css";

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/destinations")
      .then((res) => res.json())
      .then((data) => setDestinations(data));
  }, []);
  return (
    <div>
      <div className="container mt-5">
        <div>
          <h2 className="text-center mt-5">Our Services</h2>
          <div className="underline-div mx-auto"></div>
        </div>
        <div className="row g-3 mt-4">
          {destinations.map((destination) => (
            <div key={destination._id} className="col-md-4">
              <div className="card m-2 p-3">
                <div className=" text-center">
                  <img
                    className="img-fluid card-img rounded"
                    src={destination.img}
                    alt=""
                  />
                </div>
                <div className="meal-info text-center">
                  <h4>{destination.name}</h4>
                  <p>{destination.description}</p>
                  <p>{destination.days} Days</p>
                </div>
                <hr />
                <h3 className="price fw-bold">${destination.price}</h3>
                <div className="details">
                  <Link to={`/destination/${destination._id}`}>
                    <button className=" btn btn-warning">Book Now</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
