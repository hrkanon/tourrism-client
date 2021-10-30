import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./MyOrders.css";

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  const [isDeleted, setIsDeleted] = useState(null);
  const { user } = useAuth();
  const email = user.email;
  useEffect(() => {
    fetch(`https://floating-plains-91880.herokuapp.com/myOrders/${email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [isDeleted]);

  const handleDelete = (productId) => {
    const proceed = window.confirm("Are you sure, You want to delete?");
    if (proceed) {
      fetch(
        `https://floating-plains-91880.herokuapp.com/deleteProduct/${productId}`,
        {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((result) => {
          if (result.deleteCount) {
            setIsDeleted(true);
          } else {
            setIsDeleted(false);
          }
        });
    }
  };
  return (
    <div>
      <h2 className="text-center mt-5 service-heading">
        My <span className="text-warning">Orders:</span> {orders?.length}
      </h2>
      <div className="underline-div mx-auto"></div>
      <div className="container">
        <div className="row g-3 mt-4">
          {orders.map((order) => (
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
                <div className="delete-button ">
                  <button
                    className="btn btn-warning px-4"
                    onClick={() => handleDelete(order._id)}
                  >
                    Delete
                  </button>
                </div>
                <div className="details">
                  <Link to={`/placeOrder/${order._id}`}>
                    <button className=" btn btn-warning">
                      <i class="fas pe-2 fa-cart-arrow-down"></i>Buy Now
                    </button>
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

export default MyOrder;
