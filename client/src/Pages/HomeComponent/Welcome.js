import axios from "axios";
import React, { useEffect, useState } from "react";

var welcome=[];
const Welcome = () => {
  const [loading, setLoading] = useState(true);
  // Json Data Immitation
  useEffect(()=>{
    var config = {
      method: 'get',
      url: '../data/indx/cntnt',
    };

    axios(config)
      .then(function (response) {
        welcome = (response.data.data[0].welcomeTo3GB);
        console.log(welcome);
        setLoading(false);

      })
      .catch(function (error) {
        console.log(error);
      });

  }, [])
  if(loading){
    return<p>Loading</p>
  }
  else{
    return (
      <section className="w3l-feature-8">
        <div className="features-main py-5">
          <div className="container py-md-5 py-4">
            <div className="title-heading-w3 text-center mx-auto mb-5 pb-sm-4">
              <h3 className="title-main">
                Welcome to <span>3-GB</span>
              </h3>
            </div>
            <div className="row features text-center">
              {welcome.map((data) => (
                <div className="col-lg-4 col-sm-6" key={`${data.heading}`}> 
                  <div className="feature-body">
                    <div className="feature-images">
                      <span className={data.icon} aria-hidden="true"></span>
                    </div>
                    <div className="feature-info mt-4">
                      <h3 className="feature-titel">{data.heading}</h3>
                      <p className="feature-text">{data.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default Welcome;
