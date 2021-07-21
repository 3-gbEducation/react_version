import React, { useState } from "react";
import StepForm from "./StepForm";

const Banner = () => {
  const [step, setStep] = useState(1);
  const nextStep = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };
  const prevStep = (e) => {
    e.preventDefault();
    setStep(step - 1);
  };

  const handleSubmit = (
    e,
    name,
    mobile,
    email,
    boe,
    Class,
    subject,
    language,
    days,
    time,
    budget,
    requirement
  ) => {
    e.preventDefault();
    console.log({
      name,
      mobile,
      email,
      boe,
      Class,
      subject,
      language,
      days,
      time,
      budget,
      requirement,
    });
  };
  return (
    <section className="w3l-main-slider" id="home">
      <div className="companies20-content">
        <div className="slider-info  banner-view banner-top1">
          <div className="banner-info">
            <div className="banner-info-bg container-fluid d-flex justify-content-end">
              <div className="form">
                <form>
                  <div style={{ textAlign: "center" }}>
                    <p
                      className="free-class-form-header mt-3"
                      style={{ color: "black", fontWeight: "700" }}
                    >
                      Book a <span style={{ color: "#FF6E65" }}>Free Demo</span>
                    </p>
                  </div>
                  <StepForm
                    step={step}
                    nextStep={nextStep}
                    prevStep={prevStep}
                    handleSubmit={handleSubmit}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
