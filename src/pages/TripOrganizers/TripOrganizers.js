import React from "react";
import "./TripOrganizers.css";
import img1 from "../../images/organizers/organizer1.jpeg";
import img2 from "../../images/organizers/organizer2.jpeg";
import img3 from "../../images/organizers/organizer3.jpeg";
import img4 from "../../images/organizers/organizer4.jpeg";

const TripOrganizers = () => {
  return (
    <div className="my-5">
      <h2 className="text-center">MEET OUR TRIP ORGANIZER</h2>
      <div className=" d-flex justify-content-center align-items-center">
        <div className="review-line"></div>
        <div className="mx-2">
          <i class="fas globe fa-globe-americas"></i>
        </div>
        <div className="review-line"></div>
      </div>
      <p className="text-center">
        We have the best team in the whole world that organizes the best trips
        for our clients and make their journeys life remembering.
      </p>
      <div className="container">
        <div className="row g-3 mt-3">
          <div className="col-md-6">
            <div className="d-flex align-items-center organizer p-2">
              <div>
                <img className="organizer-img" src={img1} alt="" />
              </div>
              <div className="ms-2">
                <h2>Joe Root</h2>
                <h4>Tour Agent</h4>
                <p>
                  Joe Root is a friendly, and very helpful agent of our team.
                  You can get the good guidence of your tour plan.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex align-items-center organizer p-2">
              <div>
                <img className="organizer-img" src={img3} alt="" />
              </div>
              <div className="ms-2">
                <h2>Ramsay</h2>
                <h4>Trip Adviser</h4>
                <p>
                  Ramsay will assess and give you the best trip plan especially
                  for your case.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex align-items-center organizer p-2">
              <div>
                <img className="organizer-img" src={img4} alt="" />
              </div>
              <div className="ms-2">
                <h2>Nichole</h2>
                <h4>Tour Manager</h4>
                <p>
                  Nichole is always be there if you required anything to make
                  your tour worthy.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex align-items-center organizer p-2">
              <div>
                <img className="organizer-img" src={img2} alt="" />
              </div>
              <div className="ms-2">
                <h2>Roy Stone</h2>
                <h4>Service Manager</h4>
                <p>
                  Roy Stone the service manager of our team. You can get all
                  kind of service of your tour.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripOrganizers;
