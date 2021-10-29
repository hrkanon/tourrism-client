import React from "react";
import "./Banner.css";
import img1 from "../../images/new-york.jpeg";
import img2 from "../../images/london.jpeg";
import img3 from "../../images/paris.jpeg";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src={img1} alt="First slide" />
        <Carousel.Caption>
          <h4>UNITED STATES</h4>
          <h1>Irresistible New York</h1>
          <p>
            New York city wears many crowns, and spread an irresistable feast
            for all.
          </p>
          <div>
            <button className="btn btn-primary">Discover New york</button>
            <button className="ms-3 btn btn-warning">Book your Trip</button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img2} alt="First slide" />
        <Carousel.Caption>
          <h4>UNITED Kingdom</h4>
          <h1>Theatrical London</h1>
          <p>From history and culture to fine food and good times</p>
          <div>
            <button>Discover New york</button>
            <button className="ms-3">Book your Trip</button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img3} alt="First slide" />
        <Carousel.Caption>
          <h4>France</h4>
          <h1>Magnificent Paris</h1>
          <p>Recognizable, Lovely, Passionate and forever yours...</p>
          <div>
            <button>Discover New york</button>
            <button className="ms-3">Book your Trip</button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
