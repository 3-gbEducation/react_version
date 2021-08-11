import React from "react";
import image1 from "../../assets/images/1.jpg";
import image2 from "../../assets/images/2.jpg";
import image3 from "../../assets/images/3.jpg";
import image4 from "../../assets/images/3.jpg";
import image5 from "../../assets/images/5.jpg";
import image6 from "../../assets/images/6.jpg";

const Courses = () => {
  // Json Data Immitation
  const courses = [
    {
      id: 1,
      std: "Class 1 - 4",
      msg: "Children are the future, teach them well and let them lead the way.",
      img: image1,
    },
    {
      id: 2,
      std: "Class 5 - 8",
      msg: "Education’s purpose is to replace an empty mind with an open one.",
      img: image2,
    },
    {
      id: 3,
      std: "Class 9 - 10",
      msg: "Education is learning what you didn’t even know you didn’t know.",
      img: image3,
    },
    {
      id: 4,
      std: "Class 11 - 12",
      msg: "Education must not simply teach work – it must teach Life.",
      img: image4,
    },
    {
      id: 5,
      std: "Programming",
      msg: "First, solve the problem. Then, write the code.",
      img: image5,
    },
    {
      id: 6,
      std: "Language Learning",
      msg: "Knowledge of languages is the doorway to wisdom.",
      img: image6,
    },
  ];
  return (
    <div className="w3l-grids-block-5 py-5">
      <div className="container py-md-5 py-4">
        <div className="title-heading-w3 text-center mx-auto mb-5 pb-sm-4">
          <h3 className="title-main">
            Pick a Course to <span>Get Started</span>
          </h3>
        </div>
        <div className="row">
          {courses.map((course) => (
            <div className="col-lg-4 col-md-5 mt-md-5 mt-5" key={course.id}>
              <div className="blog-card-single">
                <div className="grids5-info position-relative">
                  <img
                    src={course.img}
                    alt=""
                    className="img-fluid"
                    style={{ height: "210px" }}
                  />
                  <div className="course-price-item"></div>
                </div>
                <div className="content-main-top">
                  <div className="content-top mb-4 mt-3"></div>
                  <h4>
                    <a href="/find-tutor">{course.std}</a>
                  </h4>
                  <p>{course.msg}</p>
                  <div className="top-content-border d-flex align-items-center justify-content-between mt-5 pt-4">
                    <ul className="rating-list"></ul>
                    <a
                      className="btn btn-style btn-style-primary"
                      href="/find-tutor"
                    >
                      Know Details
                      <i className="fa fa-arrow-right ml-2" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-5">
          <a
            className="btn btn-style btn-style-secondary mt-sm-3"
            href="/find-tutor"
          >
            Browse more courses
            <i className="fa fa-arrow-right ml-2" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Courses;
