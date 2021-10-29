import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import "./Cart.css";

const Cart = () => {
  const [orders, setOrders] = useState([]);
  const [isDeleted, setIsDeleted] = useState(null);
  const { user } = useAuth();
  const email = user.email;
  useEffect(() => {
    fetch(`http://localhost:5000/myOrders/${email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [isDeleted]);

  const handleDelete = (productId) => {
    console.log(productId);
    fetch(`http://localhost:5000/deleteProduct/${productId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.deleteCount) {
          setIsDeleted(true);
        } else {
          setIsDeleted(false);
        }
      });
  };
  return (
    <div>
      <h2 className="text-center">My Orders: {orders?.length}</h2>
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
                <button
                  className="delete-button"
                  onClick={() => handleDelete(order._id)}
                >
                  X
                </button>
                <div className="details">
                  <button className=" btn btn-warning">
                    <i class="fas pe-2 fa-cart-arrow-down"></i>Buy Now
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

export default Cart;
