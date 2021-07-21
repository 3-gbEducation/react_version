import React from "react";
import StudentFeedback from "./HomeComponent/StudentFeedback";
import Courses from "./HomeComponent/Courses";
import Grid from "./HomeComponent/Grid";
import Welcome from "./HomeComponent/Welcome";
import BottomBanner from "./HomeComponent/BottomBanner";
import Banner from "./HomeComponent/Banner";
import About_2_section from "./HomeComponent/About_2_section";

const Home = () => {
  return (
    <div>
      {/*  banner section  */}
      <Banner />

      {/* banner bottom section */}
      <BottomBanner />

      {/* welcome section */}
      <Welcome />

      {/* grids section */}
      <Grid />

      {/* Courses Section */}
      <Courses />

      {/* Feedback section */}
      <StudentFeedback />

      {/* about-2 section */}
      <About_2_section />
      {/* //about-2 section */}
    </div>
  );
};

export default Home;
