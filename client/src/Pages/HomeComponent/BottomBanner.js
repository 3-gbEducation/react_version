import React from "react";

const BottomBanner = () => {
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
          {banner.map((data) => (
            <div className="col-lg-3 col-md-5 px-lg-2 mt-lg-0 mt-3">
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
};

export default BottomBanner;
