import React, { useEffect, useState } from "react";
import { blogs } from "./data-helper";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import moment from "moment";

const Main = () => {
  const [category, setCategory] = useState(null);
  const [title, setTitle] = useState("");
  const [displayBlogs, setDisplayBlogs] = useState(blogs);

  var result = [],
    archive = [];

  useEffect(() => {
    window.scroll({
      top: 200,
      left: 100,
      behavior: "smooth",
    });
    if (category === "All" || category === null) {
      setDisplayBlogs(blogs);
      setTitle("");
    } else {
      setDisplayBlogs(blogs.filter((blog) => blog.category === category));
      setTitle(`Category : ${category}`);
    }
  }, [category]);

  // Search section
  const handleSearch = (value) => {
    window.scroll({
      top: 200,
      left: 100,
      behavior: "smooth",
    });
    console.log(value);
    if (value !== "") {
      for (var i = 0; i < blogs.length; i++) {
        if (blogs[i].title.toLowerCase().includes(value.toLowerCase())) {
          result.push(blogs[i]);
        }
      }
    }
    if (result.length > 0) {
      setDisplayBlogs(result);
      setTitle(`Search : ${value}`);
    }
  };

  // archives
  const searchArchive = (startDate, prevDate) => {
    window.scroll({
      top: 200,
      left: 100,
      behavior: "smooth",
    });
    console.log({ startDate, prevDate });
    console.log(blogs[0].date > startDate);
    for (let i = 0; i < blogs.length; i++) {
      if (blogs[i].date >= prevDate && blogs[i].date <= startDate) {
        console.log(blogs[i]);
        archive.push(blogs[i]);
      }
    }
    setDisplayBlogs(archive);
    setTitle(
      `Archives : ${moment(prevDate).format("MMM DD")} - ${moment(
        startDate
      ).format("MMM DD, YYYY")}`
    );
  };

  // tags
  const searchTags = (tag) => {
    window.scroll({
      top: 200,
      left: 100,
      behavior: "smooth",
    });
    const arr = [];
    console.log(tag);
    blogs.map((blog) => {
      for (let i = 0; i < blog.tags.length; i++) {
        if (blog.tags[i] === tag) {
          arr.push(blog);
        }
      }
    });
    console.log(arr);
    setTitle(`Tag : ${tag}`);
    setDisplayBlogs(arr);
  };

  return (
    <section className="w3l-blog">
      <div className="text-element-9 py-5">
        <div className="container py-md-5 py-4">
          <div className="row grid-text-9">
            <LeftSide blogs={displayBlogs} title={title} />
            <RightSide
              setCategory={setCategory}
              handleSearch={handleSearch}
              searchArchive={searchArchive}
              searchTags={searchTags}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
