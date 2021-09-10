import React, { useEffect, useState } from "react";
import axios from "axios";

var courses=[];

const Courses = () => {
  const [loading, setLoading] = useState(true);
  // Json Data Immitation
  useEffect(()=>{
    var config = {
      method: 'get',
      url: '../data/indx/cntnt',
    };

    axios(config)
      .then(function (response) {
        courses = (response.data.data[0].courses);
        // console.log(courses);
        setLoading(false);

      })
      .catch(function (error) {
        console.log(error);
      });

  }, [])
  if(loading){
    return <p>Loading...</p>
  }
  else{
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
              <div className="col-lg-4 col-md-5 mt-md-5 mt-5" key={`${course.img}`}>
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
  }
};

export default Courses;
