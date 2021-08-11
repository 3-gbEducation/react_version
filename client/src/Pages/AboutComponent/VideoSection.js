import React from "react";
import Video from "../../vid2.mp4";

const VideoSection = () => {
  const rightData = [
    {
      icon: "https://cdn0.iconfinder.com/data/icons/online-education-butterscotch-vol-2/512/Live_Webinar-512.png",
      title: "Live Learning",
      desc: "Students practice at their own pace, first filling in gaps in their understanding and then accelerating their learning.",
    },
    {
      icon: "https://image.flaticon.com/icons/png/512/1462/1462468.png",
      title: "Flexible scheduling",
      desc: "With Expert industry mentors dive deep in the methodology.We've got everything covered, no prerequisites for any session. attend at your own pace.",
    },
    {
      icon: "https://img.icons8.com/bubbles/2x/bullish.png",
      title: "Personal Mentorship",
      desc: "The primary objective of 3-GB is to enable constructive and positive interaction, guidance and mentoring students. 3-GB provides One-on-one Learning system that gives our students the advantage of getting their personal mentor.",
    },
  ];
  return (
    <section className="whyus">
      <div className="title-heading-w3 text-center mx-auto mb-5 mt-5 pb-sm-4">
        <h3 className="title-main">
          How <span>3-GB works?</span>
        </h3>
      </div>
      <div className="row">
        <div className="col-lg-6 col-sm-12 justify-content-center">
          <div>
            <video
              src={Video}
              autoPlay={true}
              loop
              muted
              className="vid pl-xl-5 mt-3"
            ></video>
          </div>
        </div>

        <div className="col-lg-6 col-sm-12 justify-content-center">
          <div className="boxcontainr">
            {rightData.map((data) => (
              <div className="box1 area-box" key={data.title}>
                <div>
                  <img src={data.icon} alt="" />
                  <h4> {data.title}</h4>
                </div>
                <p>{data.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
