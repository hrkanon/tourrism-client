import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddDestination.css";

const AddDestination = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:5000/destinations", data).then((res) => {
      if (res.data.insertedId) {
        alert("Added Successfully");
        reset();
      }
    });
  };
  return (
    <div className="mt-4 add-des-sec">
      <div className="add-destination">
        <h2 className="text-center">Add a Destination</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("name", { required: true, maxLength: 20 })}
            placeholder="Name"
          />
          <textarea {...register("description")} placeholder="Description" />
          <input type="number" {...register("days")} placeholder="Days" />
          <input type="number" {...register("price")} placeholder="Price" />
          <input {...register("img")} placeholder="image url" />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddDestination;
