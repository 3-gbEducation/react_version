import axios from "axios";
import React, { useEffect, useState } from "react";

var banner=[];
const BottomBanner = () => {
  const [loading, setLoading] = useState(true);
  // Json Data Immitation
  useEffect(()=>{
    var config = {
      method: 'get',
      url: '../data/indx/cntnt',
    };

    axios(config)
      .then(function (response) {
        banner = (response.data.data[0].bottomBanner);
        console.log(banner);
        setLoading(false);

      })
      .catch(function (error) {
        console.log(error);
      });

  }, [])
  if(loading){
    return<p>Loading...</p>
  }
  else{
    return (
      <section className="w3l-bottom-grids-6 pb-lg-5 text-center" id="services">
        <div className="container">
          <div className="grids-area-hny main-cont-wthree-fea row">
            {banner.map((data) => (
              <div className="col-lg-3 col-md-5 px-lg-2 mt-lg-0 mt-3" key={`${data.color}-${data.icon}`}>
                <div className={`area-box ${data.color}`}>
                  <i className={data.icon} aria-hidden="true"></i>
                  <h4>
                    <a href={`/${data.link}`} className="title-head">
                      {data.text}
                    </a>
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
};

export default BottomBanner;
