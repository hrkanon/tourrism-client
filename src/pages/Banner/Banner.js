import React from "react";
import "./Banner.css";
import img1 from "../../images/new-york.jpeg";
import img2 from "../../images/london.jpeg";
import img3 from "../../images/paris.jpeg";
import img4 from "../../images/banner1.jpeg";
import img5 from "../../images/banner2.jpeg";
import img6 from "../../images/banner10.jpeg";
import img7 from "../../images/banner4.jpeg";
import img8 from "../../images/banner5.jpeg";
import img9 from "../../images/banner6.jpeg";
import img10 from "../../images/banner7.jpeg";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item interval={3000}>
        <img
          className=" banner-img d-block w-100 "
          src={img5}
          alt="First slide"
        />
        <div className="banner-head text-white ">
          <h1 className="banner-heading">
            We Create <span className="text-warning">Experiences</span>
          </h1>
        </div>
        <Carousel.Caption>
          <h4>UNITED STATES</h4>
          <h1>Irresistible New York</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 banner-img"
          src={img6}
          alt="First slide"
        />
        <div className="banner-head">
          <h1 className="banner-heading text-white">
            We Create <span className="text-warning">Experiences</span>
          </h1>
        </div>
        <Carousel.Caption>
          <h4>MALDEVES</h4>
          <h1>Beautiful Sea beach</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 banner-img"
          src={img7}
          alt="First slide"
        />
        <div className="banner-head ">
          <h1 className="banner-heading text-white">
            We Create <span className="text-warning">Experiences</span>
          </h1>
        </div>
        <Carousel.Caption>
          <h4>SWIZERLAND</h4>
          <h1>Magnificent View</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
