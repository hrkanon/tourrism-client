import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Destinations.css";

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch("https://floating-plains-91880.herokuapp.com/destinations")
      .then((res) => res.json())
      .then((data) => setDestinations(data));
  }, []);
  return (
    <div id="destinations">
      <div className="container mt-5">
        <div>
          <h3 className="text-center mt-5">GREAT PLACES TO VISIT</h3>
          <h1 className="text-center service-heading ">
            Search <span className="text-warning">and Enjoy</span>
          </h1>
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
                <div className=" text-center mt-2">
                  <h3>{destination.name}</h3>
                  <p>{destination.description}</p>
                  <p>{destination.days} Days</p>
                </div>
                <hr />
                <h3 className="price fw-bold">${destination.price}</h3>
                <div className="details">
                  <Link to={`/destination/${destination._id}`}>
                    <button className=" btn btn-danger">
                      Book Now <i class="fas fa-angle-double-right"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        {user.email ? (
          <div className="mt-4 text-center addTour-btn">
            <Link to={"/addDestination"}>
              <button className="btn btn-primary px-5 py-3 fw-bold">
                Add Tours <i class="fas ps-1 fa-plane-departure"></i>
              </button>
            </Link>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Destinations;
