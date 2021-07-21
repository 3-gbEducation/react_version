import React, { useState } from "react";

const StepForm = ({ step, nextStep, prevStep, handleSubmit }) => {
  const [name, setName] = useState(null);
  const [mobile, setMobile] = useState(null);
  const [email, setEmail] = useState(null);
  const [boe, setBoe] = useState(null);
  const [Class, setClass] = useState(null);
  const [subject, setSubject] = useState(null);
  const [language, setLanguage] = useState(null);
  const [days, setDays] = useState(null);
  const [time, setTime] = useState(null);
  const [budget, setBudget] = useState(null);
  const [requirement, setRequirement] = useState(null);
  switch (step) {
    case 1:
      return (
        <div>
          <div className="mb-3">
            <input
              type="name"
              className="col-lg-12 col-sm-12"
              placeholder="Name"
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="col-lg-12 col-sm-12"
              name="mobile"
              placeholder="Mobile Number"
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
          <button className="btn btn-primary" onClick={nextStep}>
            Next
          </button>
        </div>
      );

    case 2:
      return (
        <div>
          <div className="mb-3">
            <input
              type="email"
              className="col-lg-12 col-sm-12"
              placeholder="Email Address"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="col-lg-12 col-sm-12"
              placeholder="Board of Examination"
              name="boe"
              onChange={(e) => setBoe(e.target.value)}
            />
          </div>
          <button
            className="btn mr-3"
            style={{ background: "#ff6e65", color: "#ffffff" }}
            onClick={prevStep}
          >
            Previous
          </button>
          <button className="btn btn-primary" onClick={nextStep}>
            Next
          </button>
        </div>
      );

    case 3:
      return (
        <div>
          <div className="mb-3">
            <input
              type="text"
              className="col-lg-12 col-sm-12"
              placeholder="Class"
              name="class"
              onChange={(e) => setClass(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="col-lg-12 col-sm-12"
              placeholder="Subject"
              name="subject"
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="col-lg-12 col-sm-12"
              placeholder="Language"
              name="language"
              onChange={(e) => setLanguage(e.target.value)}
            />
          </div>
          <button
            className="btn mr-3"
            style={{ background: "#ff6e65", color: "#ffffff" }}
            onClick={prevStep}
          >
            Previous
          </button>
          <button className="btn btn-primary" onClick={nextStep}>
            Next
          </button>
        </div>
      );

    case 4:
      return (
        <div>
          <div className="input-group mb-3">
            <select
              className="custom-select"
              name="days"
              id="inputGroupSelect01"
              multiple
              onChange={(e) => setDays(e.target.value)}
            >
              <option selected disabled>
                Days Available
              </option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
              <option value="Sunday">Sunday</option>
            </select>
          </div>
          <div className="input-group mb-3">
            <select
              className="custom-select"
              name="time"
              id="inputGroupSelect02"
              multiple
              onChange={(e) => setTime(e.target.value)}
            >
              <option selected disabled>
                Preferred Time Slot
              </option>
              <option value="6 am - 9 am">6 am - 9 am</option>
              <option value="9 am - 12 pm">9 am - 12 pm</option>
              <option value="12 pm - 3 pm">12 pm - 3 pm</option>
              <option value="3 pm - 6 pm">3 pm - 6 pm</option>
              <option value="6 pm - 9 pm">6 pm - 9 pm</option>
              <option value="9 pm - 12 am">9 pm - 12 am</option>
            </select>
          </div>
          <button
            className="btn mr-3"
            style={{ background: "#ff6e65", color: "#ffffff" }}
            onClick={prevStep}
          >
            Previous
          </button>
          <button className="btn btn-primary" onClick={nextStep}>
            Next
          </button>
        </div>
      );

    case 5:
      return (
        <div>
          <div className="mb-3">
            <input
              type="text"
              className="col-lg-12 col-sm-12"
              placeholder="Budget"
              name="budget"
              onChange={(e) => setBudget(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="col-lg-12 col-sm-12"
              placeholder="Any Specific requirement"
              name="requirement"
              onChange={(e) => setRequirement(e.target.value)}
            />
          </div>
          <button
            className="btn mr-3"
            style={{ background: "#ff6e65", color: "#ffffff" }}
            onClick={prevStep}
          >
            Previous
          </button>
          <button
            className="btn btn-primary"
            onClick={() =>
              handleSubmit(
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
              )
            }
          >
            Submit
          </button>
        </div>
      );

    default:
      return null;
  }
};

export default StepForm;
