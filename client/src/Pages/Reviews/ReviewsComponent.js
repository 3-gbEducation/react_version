import axios from "axios";
import React, { useEffect, useState } from "react";
var feedback=[];
var url='';
function ReviewComponent({type}) {
  const [loading, setLoading] = useState(true);
  // Json Data Immitation
  useEffect(()=>{
    if(type==='students'){
      url = '../data/fb/studs'
    }
    else if(type==='tutors'){
      url = '../data/fb/ttrs'
    }
    var config = {
      method: 'get',
      url: url,
    };

    axios(config)
      .then(function (response) {
        feedback= (response.data.data);
        console.log(feedback);
        setLoading(false);

      })
      .catch(function (error) {
        console.log(error);
      });

  }, [type])
  if(loading){
    return<p>Loading...</p>
  }
  else{
    return (
      <div>
        <div className="w3l-cutomer-main-cont">
          <div className="testimonials py-5">
            <div className="container py-md-5 py-4">
              <div className="title-heading-w3 text-center mx-auto mb-5 pb-lg-5">
                <h3 className="title-main">
                  {type==="students" ? "Student" : "Tutor"} Community <span>Feedback </span>
                </h3>
              </div>
              <div className="row content-sec mt-md-5">
                {feedback.map((fdb) => (
                  <div
                    className="col-lg-4 col-md-5 testi-sections mt-md-5 mt-4"
                    key={`${fdb._id}`}
                  >
                    <div className="testimonials_grid">
                      <p className="sub-test">
                        <q>{fdb.feedback}</q>
                      </p>
                      <div className="d-grid sub-author-con">
                        <div className="testi-img-res">
                          {/* <img src={fdb.img} alt="" className="img-fluid" /> */}
                        </div>
                        <div className="testi_grid text-left">
                          <h5>{fdb.name}</h5>
                          <p>{fdb.standard ? fdb.standard : fdb.subject}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewComponent;
