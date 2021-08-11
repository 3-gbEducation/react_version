import React from "react";

const AboutBottomGrid = () => {
  const gridData = [
    {
      icon: "fa fa-smile-o",
      style: "icon-style-1",
      title: "Individual Attention",
      desc: "One of our first and foremost mottos - We are always with you.",
    },
    {
      icon: "fa fa-graduation-cap",
      style: "icon-style-2",
      title: "Trending Courses",
      desc: "We update ourselves on a regular basis to serve you top - notch content",
    },
    {
      icon: "fa fa-users",
      style: "icon-style-3",
      title: "Expert Teachers",
      desc: "Quality & Quantity always go hand in hand at 3-GB",
    },
  ];
  return (
    <section className="w3l-bottom-about py-5">
      <div className="container py-md-5 py-4">
        <div className="grids-area-hny main-cont-wthree-fea row">
          {gridData.map((data) => (
            <div className="col-lg-4 col-md-6 grids-feature" key={data.title}>
              <div className="area-box">
                <span
                  className={`${data.icon} ${data.style}`}
                  aria-hidden="true"
                ></span>
                <h4>
                  <a href="#feature" className="title-head">
                    {data.title}
                  </a>
                </h4>
                <p className="mb-3">{data.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutBottomGrid;
