import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

import "./Login.css";

const Login = () => {
  const { handleGoogleSignIn, signInUsingEmailPassword } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const history = useHistory();
  const location = useLocation();
  const redirect_uri = location.state?.from || "/home";

  const googleSignIn = () => {
    handleGoogleSignIn().then((res) => {
      history.push(redirect_uri);
    });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (email, password) => {
    signInUsingEmailPassword(email, password)
      .then((result) => {
        history.push(redirect_uri);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="container login-form py-3 mt-5">
      <h2 className="text-center py-3">Please Login</h2>
      <div className="form d-flex flex-column align-items-center">
        <input
          onBlur={handleEmailChange}
          type="email"
          placeholder="your email"
        />
        <br />
        <input
          onBlur={handlePasswordChange}
          type="password"
          placeholder="password"
        />
      </div>
      <small className="text-danger ps-4 ms-1">{error}</small>
      <br />
      <p className="mt-3 text-center">
        New in MedService?
        <Link className="text-danger ps-2" to="/register">
          click here to register
        </Link>
      </p>
      <button
        className="btn btn-warning w-100"
        onClick={() => handleLogin(email, password)}
      >
        Login
      </button>
      <p className="fw-bold mt-2 text-center">Or</p>
      <button className="w-100 btn btn-warning" onClick={googleSignIn}>
        Login with Google
      </button>
    </div>
  );
};

export default Login;
