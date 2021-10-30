import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import "./AddDestination.css";

const AddDestination = () => {
  const history = useHistory();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://floating-plains-91880.herokuapp.com/destinations", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Added Successfully");
          reset();
          history.push("/destinations");
        }
      });
  };
  return (
    <div className="mt-4 add-des-sec">
      <div className="add-destination py-4">
        <h2 className="text-center">Add a Destination</h2>
        <hr />
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="py-2 ps-2"
            {...register("name", { required: true, maxLength: 20 })}
            placeholder="Name"
          />
          <textarea
            className="py-2 ps-2"
            {...register("description")}
            placeholder="Description"
          />
          <input
            className="py-2 ps-2"
            type="number"
            {...register("days")}
            placeholder="Days"
          />
          <input
            className="py-2 ps-2"
            type="number"
            {...register("price")}
            placeholder="Price"
          />
          <input
            className="py-2 ps-2"
            {...register("img")}
            placeholder="image url"
          />
          <input className="submit-btn" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddDestination;
