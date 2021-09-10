import axios from "axios";
import React, { useEffect, useState } from "react";
import LoadingComponent from "../Loading";

var feedback;

const TutorFeedback = () => {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    var config = {
      method: 'get',
      url: '../data/rvws/ttrs',
    };

    axios(config)
      .then(function (response) {
        feedback = (response.data.data);
        console.log(feedback);
        setloading(false);

      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])
  // JSON data immitation

  if (loading) {
    return (
      <LoadingComponent />
    )
  }
  else {
    return (
      <section>
        <div className="w3l-cutomer-main-cont">
          <div className="testimonials py-5">
            <div className="container py-md-5 py-4">
              <div className="title-heading-w3 text-center mx-auto mb-5 pb-lg-5">
                <h3 className="title-main">
                  Tutor Community <span>Feedback </span>
                </h3>
              </div>
              <div className="row content-sec mt-md-5">

                {(feedback?.length > 0) && Object.keys(feedback).map((i) => {
                  return (
                    <div key={feedback[i]._id} className="col-lg-4 col-md-5 testi-sections mt-md-5 mt-4">
                      <div className="testimonials_grid">
                        <p className="sub-test">
                          <q>{feedback[i].feedback}</q>
                        </p>
                        <div className="d-grid sub-author-con">
                          <div className="testi-img-res">
                            {/* <img src={fdb.img} alt="" className="img-fluid" /> */}
                          </div>
                          <div className="testi_grid text-left">
                            <h5>{feedback[i].name}</h5>
                            <p>{feedback[i].subject}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

            </div>
          </div>
        </div>
      </section>
    )
  }
};

export default TutorFeedback;
