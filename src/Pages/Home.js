import React, { useState } from "react";
import StepForm from "./HomeComponent/StepForm";
import image4 from "../assets/images/image.png";
import StudentFeedback from "./HomeComponent/StudentFeedback";
import Courses from "./HomeComponent/Courses";

const Home = () => {
  const [step, setStep] = useState(1);
  const nextStep = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };
  const prevStep = (e) => {
    e.preventDefault();
    setStep(step - 1);
  };

  const handleSubmit = (
    e,
    name,
    mobile,
    email,
    boe,
    Class,
    subject,
    language,
    days,
    time,
    budget,
    requirement
  ) => {
    e.preventDefault();
    console.log({
      name,
      mobile,
      email,
      boe,
      Class,
      subject,
      language,
      days,
      time,
      budget,
      requirement,
    });
  };

  return (
    <div>
      {/*  banner section  */}
      <section className="w3l-main-slider" id="home">
        <div className="companies20-content">
          <div className="slider-info  banner-view banner-top1">
            <div className="banner-info">
              <div className="banner-info-bg container-fluid d-flex justify-content-end">
                <div className="form">
                  <form>
                    <div style={{ textAlign: "center" }}>
                      <p
                        className="free-class-form-header mt-3"
                        style={{ color: "black", fontWeight: "700" }}
                      >
                        Book a{" "}
                        <span style={{ color: "#FF6E65" }}>Free Demo</span>
                      </p>
                    </div>
                    <StepForm
                      step={step}
                      nextStep={nextStep}
                      prevStep={prevStep}
                      handleSubmit={handleSubmit}
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* //banner section */}

      {/* banner bottom section */}
      <section className="w3l-bottom-grids-6 pb-lg-5 text-center" id="services">
        <div className="container">
          <div className="grids-area-hny main-cont-wthree-fea row">
            <div className="col-lg-3 col-md-5 px-lg-2 mt-lg-0 mt-3">
              <div className="area-box color-1">
                <i className="fa fa-user" aria-hidden="true"></i>
                <h4>
                  <a href="/find-tutor" className="title-head">
                    Find a Tutor
                  </a>
                </h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-5 px-lg-2 mt-lg-0 mt-3 ">
              {/* <!--mt-md-5 mt-3--> */}
              <div className="area-box color-2">
                <i className="fa fa-book" aria-hidden="true"></i>
                <h4>
                  <a href="/soon" className="title-head">
                    Micro Courses
                  </a>
                </h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-5 px-lg-2 mt-lg-0 mt-3">
              <div className="area-box color-3">
                <i className="fa fa-comments" aria-hidden="true"></i>
                <h4>
                  <a href="/latest" className="title-head">
                    Latest Updates
                  </a>
                </h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-5 px-lg-2 mt-lg-0 mt-3">
              <div className="area-box color-4">
                <i className="fa fa-check-circle" aria-hidden="true"></i>
                <h4>
                  <a href="/reviews" className="title-head">
                    Review
                  </a>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* //banner bottom section */}

      {/* welcome section */}
      <section className="w3l-feature-8">
        <div className="features-main py-5">
          <div className="container py-md-5 py-4">
            <div className="title-heading-w3 text-center mx-auto mb-5 pb-sm-4">
              <h3 className="title-main">
                Welcome to <span>3-GB</span>
              </h3>
            </div>
            <div className="row features text-center">
              <div className="col-lg-4 col-sm-6">
                <div className="feature-body">
                  <div className="feature-images">
                    <span
                      className="fa fa-graduation-cap"
                      aria-hidden="true"
                    ></span>
                  </div>
                  <div className="feature-info mt-4">
                    <h3 className="feature-titel">Dedicated Educators</h3>
                    <p className="feature-text">
                      Learning is easier when you have an excellent teacher.
                      That's why most of our educators have achieved an advanced
                      degree in their field. Our their lessons.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 mt-sm-0 mt-5">
                <div className="feature-body">
                  <div className="feature-images">
                    <span className="fa fa-users" aria-hidden="true"></span>
                  </div>
                  <div className="feature-info mt-4">
                    <h3 className="feature-titel">First rate curriculum</h3>
                    <p className="feature-text">
                      Are you a beginner, expert, or somewhere in between? Not
                      to worry! We offer a variety of high-quality courses
                      designed to prepare you for your next step.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 mt-lg-0 mt-5">
                <div className="feature-body">
                  <div className="feature-images">
                    <span className="fa fa-book" aria-hidden="true"></span>
                  </div>
                  <div className="feature-info mt-4">
                    <h3 className="feature-titel">Commitment to Excellence</h3>
                    <p className="feature-text">
                      Our mission is to embrace the pursuit of excellence both
                      inside and outside the classroom. We encourage critical
                      thinking and emphasize the learning process over rote
                      memorization.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* //welcome section */}

      {/* grids section */}
      <section className="w3l-homeblock1" id="free-class">
        <div className="w3-services-ab py-5">
          <div className="container py-md-5 py-4">
            <div className="w3-services-grids pb-sm-5 mb-sm-4">
              <div className="row w3-services-right-grid">
                <div className="col-xl-4"></div>
                <div className="col-xl-8">
                  <div className="fea-gd-vv row">
                    <div className="col-md-5 pt-md-5 mt-md-5 mt-4">
                      <div className="d-flex align-items-center feature-gd ">
                        <div className="icon">
                          <i
                            className="fa fa-american-sign-language-interpreting"
                            aria-hidden="true"
                          ></i>
                        </div>
                        <div className="icon-info">
                          <h5>Flexible ClassNamees</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5 pt-md-5 mt-md-5 mt-4">
                      <div className="d-flex align-items-center feature-gd">
                        <div className="icon">
                          <i className="fa fa-download" aria-hidden="true"></i>
                        </div>
                        <div className="icon-info">
                          <h5>Personalised Learning</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5 mt-4 pt-md-5">
                      <div className="d-flex align-items-center feature-gd ">
                        <div className="icon">
                          <i
                            className="fa fa-headphones"
                            aria-hidden="true"
                          ></i>
                        </div>
                        <div className="icon-info">
                          <h5>One-on-One</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5 mt-4 pt-md-5">
                      <div className="d-flex align-items-center feature-gd">
                        <div className="icon">
                          <i
                            className="fa fa-play-circle"
                            aria-hidden="true"
                          ></i>
                        </div>
                        <div className="icon-info">
                          <h5>Learn from Home</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* //grids section */}

      {/* Courses Section */}
      <Courses />
      {/* //Courses Section */}

      {/* Feedback section */}
      <StudentFeedback />
      {/* //Feedback section */}

      {/* about-2 section */}
      <section className="w3l-about-2 pb-5">
        <div className="container pb-md-5 pb-4 mb-5">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-5 about-2-secs-right mb-lg-0 mb-4 text-center">
              <img
                src={image4}
                alt=""
                className="img-fluid img-responsive m-auto"
              />
            </div>
            <div className="col-lg-7 about-2-secs-left pr-lg-5">
              <h3 className="title-style mb-sm-3 mb-2">
                Not Sure Where to Begin? <br />
                Contact Now, We will Help you
              </h3>
              <div className="mt-4">
                <a
                  className="btn btn-style btn-style-secondary mt-3"
                  href="/contact"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* //about-2 section */}
    </div>
  );
};

export default Home;
