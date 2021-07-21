import React from "react";
import image4 from "../../assets/images/image.png";

const About_2_section = () => {
  return (
    <section className="w3l-about-2 pb-5">
      <div className="container pb-md-5 pb-4 mb-5">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-5 about-2-secs-right mb-lg-0 mb-4 text-center">
            <img
              src={image4}
              alt=""
              className="img-fluid img-responsive m-auto"
            />
          </div>
          <div className="col-lg-7 about-2-secs-left pr-lg-5">
            <h3 className="title-style mb-sm-3 mb-2">
              Not Sure Where to Begin? <br />
              Contact Now, We will Help you
            </h3>
            <div className="mt-4">
              <a
                className="btn btn-style btn-style-secondary mt-3"
                href="/contact"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About_2_section;
