import axios from "axios";
import React, { useEffect, useState } from "react";

var banner=[];
const BottomBanner = () => {
<<<<<<< HEAD
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
=======
  const banner = [
    {
      color: "color-1",
      icon: "fa fa-user",
      link: "find-tutor",
      text: "Find a Tutor",
    },
    {
      color: "color-2",
      icon: "fa fa-book",
      link: "soon",
      text: "Micro Courses",
    },
    {
      color: "color-3",
      icon: "fa fa-comments",
      link: "latest",
      text: "Latest Updates",
    },
    {
      color: "color-4",
      icon: "fa fa-check-circle",
      link: "reviews",
      text: "Review",
    },
  ];
  return (
    <section className="w3l-bottom-grids-6 pb-lg-5 text-center" id="services">
      <div className="container">
        <div className="grids-area-hny main-cont-wthree-fea row">
          {banner.map((data,index) => (
            
            <div key={index} className="col-lg-3 col-md-5 px-lg-2 mt-lg-0 mt-3">
              <div className={`area-box ${data.color}`}>
                <i className={data.icon} aria-hidden="true"></i>
                <h4>
                  <a href={`/${data.link}`} className="title-head">
                    {data.text}
                  </a>
                </h4>
>>>>>>> main
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
};

export default BottomBanner;
