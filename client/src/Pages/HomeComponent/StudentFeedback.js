import React from "react";
import image1 from "../../assets/images/testi2.jpg";
import image2 from "../../assets/images/testi1.jpg";
import image3 from "../../assets/images/testi3.jpg";

const StudentFeedback = () => {
  // JSON data immitation
  const feedback = [
    {
      name: "Ryan Edison",
      feedback:
        "The tutors are very approachable and available to answer anyquestion at any time. 3-GB has quickly become my go-toe-learning platform.",
      std: "Class 12",
      img: image1,
    },
    {
      name: "Sandra Hunter",
      feedback:
        "This is an outstanding platform which is easily affordable. The service was superb and the amenities outmatch the competition.",
      std: "Class 10",
      img: image2,
    },
    {
      name: "Pallavi Thalasani",
      feedback:
        "With 3-GB, I was able to start learning online and eventually build up enough knowledge and skills to transistion into a well-paying career",
      std: "Programming",
      img: image3,
    },
  ];
  return (
    <div className="w3l-cutomer-main-cont">
      <div className="testimonials py-5">
        <div className="container py-md-5 py-4">
          <div className="title-heading-w3 text-center mx-auto mb-5 pb-lg-5">
            <h3 className="title-main">
              Student Community <span>Feedback </span>
            </h3>
          </div>
          <div className="row content-sec mt-md-5">
            {feedback.map((fdb) => (
              <div className="col-lg-4 col-md-5 testi-sections mt-md-5 mt-4">
                <div className="testimonials_grid">
                  <p className="sub-test">
                    <q>{fdb.feedback}</q>
                  </p>
                  <div className="d-grid sub-author-con">
                    <div className="testi-img-res">
                      <img src={fdb.img} alt="" className="img-fluid" />
                    </div>
                    <div className="testi_grid text-left">
                      <h5>{fdb.name}</h5>
                      <p>{fdb.std}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentFeedback;
