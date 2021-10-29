import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = (name, email, password) => {
    // signUpWithEmailPassword(name, email, password);
  };

  return (
    <div className="container login-form py-3 mt-5">
      <h2 className="text-center py-3">Please Register</h2>
      <div className="form d-flex flex-column align-items-center">
        <input
          onBlur={handleNameChange}
          type="text"
          placeholder="Your Name"
          required
        />
        <br />
        <input
          onBlur={handleEmailChange}
          type="email"
          placeholder="your email"
          required
        />
        <br />
        <input
          onBlur={handlePasswordChange}
          type="password"
          placeholder="password"
          required
        />
        <small className="text-danger ps-4"></small>
        <br />
        <p>
          Already have an Account?
          <Link className="text-danger ps-2 " to="/login">
            click here to login
          </Link>
        </p>

        <button
          className="btn btn-warning w-100"
          onClick={() => handleRegister(name, email, password)}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
