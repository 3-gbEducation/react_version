import React from "react";

const Welcome = () => {
  const welcome = [
    {
      icon: "fa fa-graduation-cap",
      title: "Dedicated Educators",
      desc: "Learning is easier when you have an excellent teacher. That's why most of our educators have achieved an advanced degree in their field. Our their lessons.",
    },
    {
      icon: "fa fa-users",
      title: "First rate curriculum",
      desc: "Are you a beginner, expert, or somewhere in between? Not to worry! We offer a variety of high-quality courses designed to prepare you for your next step.",
    },
    {
      icon: "fa fa-book",
      title: "Commitment to Excellence",
      desc: "Our mission is to embrace the pursuit of excellence both inside and outside the classroom. We encourage critical thinking and emphasize the learning process over rote memorization.",
    },
  ];
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
            {welcome.map((data,index) => (
              <div key={index} className="col-lg-4 col-sm-6">
                <div className="feature-body">
                  <div className="feature-images">
                    <span className={data.icon} aria-hidden="true"></span>
                  </div>
                  <div className="feature-info mt-4">
                    <h3 className="feature-titel">{data.title}</h3>
                    <p className="feature-text">{data.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
