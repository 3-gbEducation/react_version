import React from "react";

const Grid = () => {
  const grid = [
    {
      icon: "fa fa-american-sign-language-interpreting",
      text: "Flexible Classes",
    },
    {
      icon: "fa fa-download",
      text: "Personalised Learning",
    },
    {
      icon: "fa fa-headphones",
      text: "One-on-One",
    },
    {
      icon: "fa fa-play-circle",
      text: "Learn from Home",
    },
  ];
  return (
    <div>
      <section className="w3l-homeblock1" id="free-class">
        <div className="w3-services-ab py-5">
          <div className="container py-md-5 py-4">
            <div className="w3-services-grids pb-sm-5 mb-sm-4">
              <div className="row w3-services-right-grid">
                <div className="col-xl-4"></div>
                <div className="col-xl-8">
                  <div className="fea-gd-vv row">
                    {grid.map((data,index) => (
                      <div key={index}className="col-md-5 pt-md-5 mt-md-5 mt-4">
                        <div className="d-flex align-items-center feature-gd ">
                          <div className="icon">
                            <i className={data.icon} aria-hidden="true"></i>
                          </div>
                          <div className="icon-info">
                            <h5>{data.text}</h5>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Grid;
