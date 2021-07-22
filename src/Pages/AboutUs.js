import React from "react";

// Components
import Mission from "./AboutComponent/Mission";
import Stats from "./AboutComponent/Stats";
import AboutBottomGrid from "./AboutComponent/ABoutBottomGrid";
import VideoSection from "./AboutComponent/VideoSection";
import JoinMission from "./AboutComponent/JoinMission";

const AboutUs = () => {
  return (
    //   Inner Banner
    <div className="about">
      <div className="inner-banner" id="about">
        <section className="w3l-breadcrumb"></section>
      </div>

      {/* //Inner Banner */}

      {/* Mission section */}
      <Mission />

      {/* Stats */}
      <Stats />
      {/* //Stats */}

      {/* About Bottom Grids */}
      <AboutBottomGrid />

      {/* Video Section */}
      <VideoSection />

      {/* Join Mission */}
      <JoinMission />
    </div>
  );
};

export default AboutUs;
