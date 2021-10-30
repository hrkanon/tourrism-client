import React from "react";
import Banner from "../Banner/Banner";
import Destinations from "../Destinations/Destinations";
import Subscribe from "../Subscribe/Subscribe";
import TripOrganizers from "../TripOrganizers/TripOrganizers";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Destinations></Destinations>
      <TripOrganizers></TripOrganizers>
      <Subscribe></Subscribe>
    </div>
  );
};

export default Home;
