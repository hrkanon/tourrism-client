import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./SingleDestination.css";

const SingleDestination = () => {
  const [details, setDetails] = useState({});
  const { destinationId } = useParams();
  const { user } = useAuth();
  const history = useHistory();

  useEffect(() => {
    fetch(
      `https://floating-plains-91880.herokuapp.com/destination/${destinationId}`
    )
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  const handleBooking = () => {
    const data = details;
    data.email = user.email;
    data.status = "Pending";
    fetch("https://floating-plains-91880.herokuapp.com/addOrder", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Added to Your Cart Successfully!!");
          history.push("/myOrder");
        }
      });
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
            <button
              onClick={handleBooking}
              className="btn btn-primary px-5 py-2"
            >
              Book Now
            </button>
          </div>
          <div className="text-center mt-5 mb-3">
            <Link to={"/addDestination"}>
              <button className="btn btn-warning px-5 py-3 fw-bold">
                Add Destination <i class="fas ps-1 fa-plane-departure"></i>
              </button>
            </Link>
          </div>
        </div>
        <div className="col-md-6">
          <img className="img-fluid" src={details.img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SingleDestination;
