import React from "react";
import AboutImage from "../assets/images/about.jpg";
import JoinOurMission from "../assets/images/about1.jpg";
import Video from "../vid2.mp4";

const AboutUs = () => {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    if (open === true) document.querySelector("body").style.overflow = "hidden";
    else document.querySelector("body").style.overflow = "auto";
  }, [open]);
  return (
    //   Inner Banner
    <div className="about">
      <div className="inner-banner" id="about">
        <section className="w3l-breadcrumb">

        </section>
      </div>

      {/* //Inner Banner */}

      {/* About Section */}
      <section className="video-section py-5">
        <div className="container py-md-5 py-4">
          <div className="row">
            <div className="col-lg-6 about-right-faq align-self pr-lg-5">
              <h3 className="title-big">Our Mission </h3>
              <p className="mt-3">
                This platform is culmination of a long research based on
                problems faced by teachers and students while interacting with
                each other on online platforms. We aim to make learning
                easy,personalised,affordable and interactive while creating no
                sort of burden on students and teachers.
              </p>
            </div>
            <div className="col-lg-6 left-wthree-img-video text-righ pr-lg-5 mt-lg-0 mt-5">
              <div className="position-relative text-center">
                <img src={AboutImage} alt="" className="img-fluid" />
                <a className="popup-with-zoom-anim play-view text-center position-absolute" href="#video"
                  onClick={() => setOpen(!open)}>
                  <span className="video-play-icon">
                    <span className="fa fa-play"></span>
                  </span>
                </a>

                {/* <!-- dialog itself, mfp-hide className is required to make dialog hidden --> */}
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
                    <i className="fas fa-times"></i>
                  </h2>
                  <div className="zoom-anim-dialog">
                    <iframe 
                      title='a video'
                      src="https://player.vimeo.com/video/83651159?title=0&byline=0&portrait=0"
                      frameborder="0"
                      allow="autoplay; fullscreen"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}

      {/* Stats */}
      <section className="w3_stats pb-5" id="stats">
        <div className="container pb-md-5 pb-4 pt-4">
          <div className="w3-stats">
            <div className="row text-center">
              <div className="col-lg-3 col-sm-6">
                <div className="counter">
                  <h1 className="mb-3">6300</h1>
                  <p className="count-text">Learners & counting</p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 mt-sm-0 mt-4">
                <div className="counter">
                  <h1 className="mb-3">638</h1>
                  <p className="count-text">Total courses</p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 mt-lg-0 mt-4">
                <div className="counter">
                  <h1 className="mb-3">7600</h1>
                  <p className="count-text">Successful students</p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 mt-lg-0 mt-4">
                <div className="counter border-right-0">
                  <h1 className="mb-3">36</h1>
                  <p className="count-text">Languages</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* //Stats */}

      {/* <!-- about-bottom grids --> */}
      <section className="w3l-bottom-about py-5">
        <div className="container py-md-5 py-4">
          <div className="grids-area-hny main-cont-wthree-fea row">
            <div className="col-lg-4 col-md-6 grids-feature">
              <div className="area-box">
                <span className="fa fa-smile-o" aria-hidden="true"></span>
                <h4>
                  <a href="#feature" className="title-head">
                    Individual Attention
                  </a>
                </h4>
                <p className="mb-3">
                  One of our first and foremost mottos - We are always with you.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 grids-feature mt-md-0 mt-4">
              <div className="area-box">
                <span
                  className="fa fa-graduation-cap icon-style-2"
                  aria-hidden="true"
                ></span>
                <h4>
                  <a href="#feature" className="title-head">
                    Trending Courses
                  </a>
                </h4>
                <p className="mb-3">
                  We update ourselves on a regular basis to serve you top -
                  notch content
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 grids-feature mt-lg-0 mt-4">
              <div className="area-box">
                <span
                  className="fa fa-users icon-style-3"
                  aria-hidden="true"
                ></span>
                <h4>
                  <a href="#feature" className="title-head">
                    Expert Teachers
                  </a>
                </h4>
                <p className="mb-3">
                  Quality & Quantity always go hand in hand at 3-GB.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- //bottom-grids--> */}

      {/* <!--  section --> */}
      <section className="whyus">
        <div className="title-heading-w3 text-center mx-auto mb-5 mt-5 pb-sm-4">
          <h3 className="title-main">
            How <span>3-GB works?</span>
          </h3>
        </div>
        <div className="row">
          <div className="col-lg-6 col-sm-12 justify-content-center">
            <div>
              <video
                src={Video}
                autoPlay="true"
                loop
                muted
                className="vid pl-xl-5 mt-3"
              ></video>
            </div>
          </div>

          <div className="col-lg-6 col-sm-12 justify-content-center">
            <div className="boxcontainr">
              <div className="box1 area-box" id="boxa">
                <div>
                  <img
                    id="im1"
                    src="https://cdn0.iconfinder.com/data/icons/online-education-butterscotch-vol-2/512/Live_Webinar-512.png"
                    alt=""
                  />
                  <h4>Live Learning</h4>
                </div>
                <p>
                  Students practice at their own pace, first filling in gaps in
                  their understanding and then accelerating their learning.
                </p>
              </div>
              <div className="box1 area-box" id="boxb">
                <div>
                  <img
                    src="https://image.flaticon.com/icons/png/512/1462/1462468.png"
                    alt=""
                  />
                  <h4 className="title-head"> Flexible scheduling</h4>
                </div>
                <p>
                  With Expert industry mentors dive deep in the
                  methodology.We've got everything covered, no prerequisites for
                  any session. attend at your own pace.
                </p>
              </div>
              <div className="box1 area-box" id="boxc">
                <div>
                  <img
                    src="https://img.icons8.com/bubbles/2x/bullish.png"
                    alt=""
                  />
                  <h4 className="title-head"> Personal Mentorship</h4>
                </div>
                <p>
                  The primary objective of 3-GB is to enable constructive and
                  positive interaction, guidance and mentoring students. 3-GB
                  provides One-on-one Learning system that gives our students
                  the advantage of getting their personal mentor..
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- // setion --> */}

      {/* <!-- about section --> */}
      <section className="w3l-about-3 pb-5 pt-2">
        <div className="container py-md-5 py-4 mb-5">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6 pr-lg-5">
              <h3 className="title-big">Join Our Mission</h3>
              <p className="mt-3">
                We create healthy learning environments where students are
                active participants as individuals.
              </p>
              <ul className="list-about-2 mt-sm-4 mt-3">
                <li className="py-1">
                  <i
                    className="fa fa-check-square-o mr-2"
                    aria-hidden="true"
                  ></i>
                  Student ownership of their learning process
                </li>
                <li className="py-2">
                  <i
                    className="fa fa-check-square-o mr-2"
                    aria-hidden="true"
                  ></i>
                  Focus on the learning process rather than "big end-of-year
                  tests"
                </li>
                <li className="py-1">
                  <i
                    className="fa fa-check-square-o mr-2"
                    aria-hidden="true"
                  ></i>
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
      {/* <!-- //about section --> */}
    </div>
  );
};

export default AboutUs;
