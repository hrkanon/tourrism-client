import React, { useEffect, useState } from "react";
import "./AllOrders.css";

const AllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  useEffect(() => {
    fetch("https://floating-plains-91880.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, []);
  return (
    <div>
      <h2 className="text-center mt-5 service-heading">
        All <span className="text-warning">Orders:</span> {allOrders?.length}
      </h2>
      <div className="underline-div mx-auto"></div>
      <div className="container">
        <div className="row g-3 mt-4">
          {allOrders.map((order) => (
            <div key={order._id} className="col-md-4">
              <div className="card m-2 p-3">
                <div className=" text-center">
                  <img
                    className="img-fluid card-img rounded"
                    src={order.img}
                    alt=""
                  />
                </div>
                <div className="meal-info text-center">
                  <h4>{order.name}</h4>
                  <p>{order.description}</p>
                  <p>{order.days} Days</p>
                </div>
                <hr />
                <h3 className="price fw-bold">${order.price}</h3>
                <small className="pending">
                  {" "}
                  Status:
                  <span className="text-danger ps-1">{order.status}</span>
                </small>
                <div className="details">
                  <button className=" btn btn-warning">
                    <i class="fas pe-2 fa-myOrder-arrow-down"></i>Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllOrders;
