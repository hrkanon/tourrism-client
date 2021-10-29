import React from "react";
import "./Footer.css";
import logo from "../../images/logo.png";

const Footer = () => {
  return (
    <div className=" mt-5 footer-sec text-white w-100">
      <div className="container p-5">
        <img className="footer-logo" src={logo} alt="" />
        <div className="row mt-2">
          <div className="col-md-3 ">
            <h3>Contact Us</h3>
            <p>
              <i class="fas fa-phone"></i> +91 892 944 8112
            </p>
            <p>
              <i class="far fa-envelope"></i> care@lyfboat.com
            </p>
            <p>
              <i class="fas fa-map-marker-alt"></i> 48 Gulshan Avenue, Dhaka.
            </p>
            <p>
              <i class="fab fa-facebook-square icon"></i>
              <i class="fab fa-instagram-square icon px-2"></i>
              <i class="fab fa-twitter-square icon"></i>
              <i class="fab fa-linkedin px-2 icon"></i>
            </p>
          </div>
          <div className="col-md-3 mx-auto">
            <div>
              <h3>About Us</h3>
              <p>Careers</p>
              <p>Services</p>
              <p>General Health Advisory</p>
              <p>Our Blog</p>
            </div>
          </div>
          <div className="col-md-3 ">
            <div>
              <h3>Patients</h3>
              <p>How it Works</p>
              <p>Find a Hospital</p>
              <p>Find a Doctor</p>
              <p>Review Policy</p>
            </div>
          </div>
          <div className="col-md-3 ">
            <div>
              <h3>Providers</h3>
              <p>How it Workes</p>
              <p>Hospital Registration</p>
              <p>Doctor Registration</p>
              <p>My Account</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="text-center">
          <small> &copy; Copiright 2021 MedService. All Rights Reserved</small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
