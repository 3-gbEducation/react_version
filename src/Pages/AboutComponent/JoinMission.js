import React from "react";
import JoinOurMission from "../../assets/images/about1.jpg";

const JoinMission = () => {
  return (
    <section className="w3l-about-3 pb-5 pt-2">
      <div className="container py-md-5 py-4 mb-5">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6 pr-lg-5">
            <h3 className="title-big">Join Our Mission</h3>
            <p className="mt-3">
              We create healthy learning environments where students are active
              participants as individuals.
            </p>
            <ul className="list-about-2 mt-sm-4 mt-3">
              <li className="py-1">
                <i className="fa fa-check-square-o mr-2" aria-hidden="true"></i>
                Student ownership of their learning process
              </li>
              <li className="py-2">
                <i className="fa fa-check-square-o mr-2" aria-hidden="true"></i>
                Focus on the learning process rather than "big end-of-year
                tests"
              </li>
              <li className="py-1">
                <i className="fa fa-check-square-o mr-2" aria-hidden="true"></i>
                Learn anywhere, anytime
              </li>
            </ul>
          </div>
          <div className="col-lg-6 about-2-secs-right mt-lg-0 mt-5">
            <img
              src={JoinOurMission}
              alt=""
              className="img-fluid img-responsive"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinMission;
