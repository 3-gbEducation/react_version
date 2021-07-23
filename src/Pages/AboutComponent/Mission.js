import React, { useState } from "react";
import AboutImage from "../../assets/images/about.jpg";

const Mission = () => {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    if (open === true) document.querySelector("body").style.overflow = "hidden";
    else document.querySelector("body").style.overflow = "auto";
  }, [open]);
  return (
    <section className="video-section py-5">
      <div className="container py-md-5 py-4">
        <div className="row">
          <div className="col-lg-6 about-right-faq align-self pr-lg-5">
            <h3 className="title-big">Our Mission </h3>
            <p className="mt-3">
              This platform is culmination of a long research based on problems
              faced by teachers and students while interacting with each other
              on online platforms. We aim to make learning
              easy,personalised,affordable and interactive while creating no
              sort of burden on students and teachers.
            </p>
          </div>
          <div className="col-lg-6 left-wthree-img-video text-righ pr-lg-5 mt-lg-0 mt-5">
            <div className="position-relative text-center">
              <img src={AboutImage} alt="" className="img-fluid" />
              <a
                className="popup-with-zoom-anim play-view text-center position-absolute"
                onClick={() => setOpen(!open)}
              >
                <span className="video-play-icon">
                  <span className="fa fa-play"></span>
                </span>
              </a>

              <div
                className="modal"
                style={{
                  position: "fixed",
                  height: "100vh",
                  width: "100%",
                  margin: "0",
                  padding: "0",
                  overflow: "hidden",
                  background: "rgba(0,0,0,0.7)",
                  display: open ? "flex" : "none",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h2
                  style={{
                    position: "absolute",
                    top: "20px",
                    right: "20px",
                    cursor: "pointer",
                    color: "#ffffff",
                  }}
                  onClick={() => setOpen(false)}
                >
                  <i class="fas fa-times"></i>
                </h2>
                <div className="zoom-anim-dialog">
                  <iframe
                    src="https://player.vimeo.com/video/83651159?title=0&byline=0&portrait=0"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    className="about-video"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
