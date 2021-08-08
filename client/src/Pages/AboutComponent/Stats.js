import React from "react";

const Stats = () => {
  const stats = [
    {
      count: "6300",
      title: "Learners & counting",
    },
    {
      count: "638",
      title: "Total courses",
    },
    {
      count: "7600",
      title: "Successful students",
    },
    {
      count: "36",
      title: "Languages",
    },
  ];
  return (
    <section className="w3_stats pb-5" id="stats">
      <div className="container pb-md-5 pb-4 pt-4">
        <div className="w3-stats">
          <div className="row text-center">
            {stats.map((data) => (
              <div className="col-lg-3 col-sm-6">
                <div className="counter">
                  <h1 className="mb-3">{data.count}</h1>
                  <p className="count-text">{data.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
