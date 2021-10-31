import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "./AllOrders.css";

const AllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  useEffect(() => {
    fetch("https://floating-plains-91880.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, []);

  const totalReducer = (preValue, currentValue) =>
    preValue + parseInt(currentValue.price);
  const total = allOrders.reduce(totalReducer, 0);

  return (
    <div>
      <h2 className="text-center mt-5 service-heading">
        All <span className="text-warning">Orders:</span> {allOrders?.length}
      </h2>
      <div className="underline-div mx-auto mb-3"></div>
      <div className="container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Days</th>
              <th>Status</th>
              <th>Price</th>
            </tr>
          </thead>
          {allOrders.map((order, index) => (
            <tbody>
              <tr>
                <td>{index + 1}</td>
                <td>
                  <img className="myOrder-img pe-1" src={order.img} alt="" />
                  {order?.name}
                </td>
                <td>{order.days}</td>
                <td>{order.status}</td>
                <td>${order.price}</td>
              </tr>
            </tbody>
          ))}
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td className="fw-bold">Total</td>
              <td className="fw-bold">${total}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default AllOrders;
