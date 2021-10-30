import React from "react";
import "./PlaceOrder.css";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { useHistory, useParams } from "react-router";

const PlaceOrder = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const { orderId } = useParams();
  const history = useHistory();

  const onSubmit = (data) => {
    const url = `https://floating-plains-91880.herokuapp.com/placeOrder/${orderId}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount) {
          alert("Your Order is confirmed");
          history.push("/myOrder");
        }
      });
  };
  return (
    <div className="place-order py-4 mt-4">
      <h2 className="text-center mb-4">Please Submit followings</h2>
      <hr />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="py-2 ps-2"
          {...register("name", { required: true, maxLength: 20 })}
          placeholder={user?.name}
        />
        <input
          className="py-2 ps-2"
          type="email"
          {...register("email")}
          placeholder={user.email}
        />
        <textarea
          className="py-2 ps-2"
          {...register("address")}
          placeholder="Address"
        />
        <input
          className="py-2 ps-2"
          {...register("phone")}
          placeholder="Phone No"
        />
        <input className="submit-btn" type="submit" />
      </form>
    </div>
  );
};

export default PlaceOrder;
