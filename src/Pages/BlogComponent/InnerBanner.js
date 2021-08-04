import React from "react";

const InnerBanner = () => {
  return (
    // inner banner
    <div className="inner-banner">
      <section className="w3l-breadcrumb container">
        <div className="container">
          <h4 className="inner-text-title font-weight-bold text-white mb-sm-3 mb-2">
            Blog Posts
          </h4>
          <ul className="breadcrumbs-custom-path">
            <li>
              <a href="/">Home</a>
            </li>
            <li className="active">
              <span
                className="fa fa-chevron-right mx-2"
                aria-hidden="true"
              ></span>
              Blog Page
            </li>
          </ul>
        </div>
      </section>
    </div>
    //inner banner
  );
};

export default InnerBanner;
