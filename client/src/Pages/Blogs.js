import React from "react";
import InnerBanner from "./BlogComponent/InnerBanner";
import Main from "./BlogComponent/Main";

const Blogs = () => {
  return (
    <div
      className="blogs"
      style={{
        boxSizing: "border-box",
      }}
    >
      <InnerBanner />
      <Main />
    </div>
  );
};

export default Blogs;
