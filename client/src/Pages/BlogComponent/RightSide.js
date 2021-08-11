import React, { useState } from "react";

import moment from "moment";

import { blogs, categories, archive, tags, popularPost } from "./data-helper";

const RightSide = ({
  setCategory,
  handleSearch,
  searchArchive,
  searchTags,
}) => {
  const result = categories(blogs);
  const [input, setInput] = useState(null);

  const result1 = archive(new Date());

  const result2 = tags(blogs);

  const popPost = popularPost(blogs);

  return (
    <div className="col-lg-4 left-text-9 mt-lg-0 mt-5 pl-lg-4">
      {/* Search */}
      <div className="blog-search">
        <form
          className="d-flex search-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch(input);
          }}
        >
          <input
            type="search"
            className="form-control"
            placeholder="Search by title..."
            name="search"
            required="required"
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" className="btn search-btn">
            <span className="fa fa-search"></span>
          </button>
        </form>
      </div>

      {/* Categories */}
      <div className="categories left-aside mt-5">
        <h6 className="heading-small-text-9">Categories</h6>
        <ul>
          {result.map((res) => (
            <li key={res}>
              <a
                href='!#'
                id='cat_links'
                onClick={(e) => {
                  e.preventDefault();
                  setCategory(res);
                }}
                style={{ fontSize: "0.8rem" }}
              >
                {res}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Popular Posts */}
      <div className="left-top-9 left-aside mt-5">
        <h6 className="heading-small-text-9 mb-3">Popular Post</h6>
        {popPost.map((post) => (
          <div className="d-flex align-items-center my-3" key={post.id}>
            <img
              src={post.image}
              alt=""
              className="img-fluid mr-3"
              style={{ height: "100px", width: "100px" }}
            />
            <div className="content-blog">
              <a href={`/blog/${post.id}`} className="p-post d-block">
                <h6
                  style={{
                    color: "#000000",
                    fontSize: "0.9rem",
                    lineHeight: "20px",
                    fontWeight: "600",
                  }}
                >
                  {post.title}
                </h6>
              </a>
              <span style={{ fontSize: "0.7rem" }}>
                {moment(post.date).format("MMM DD, YYYY")}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Archives */}
      <div className="categories left-aside mt-5">
        <h6 className="heading-small-text-9">Archives</h6>
        <ul>
          {result1.map((res) => (
            <li key={res.week}>
              <a
                href='!#'
                onClick={(e) => {
                  e.preventDefault();
                  searchArchive(res.startDate, res.prevDate);
                }}
              >
                {moment(res.prevDate).format("MMM DD")} -{" "}
                {moment(res.startDate).format("MMM DD, YYYY")}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Tags */}
      <div className="tags-block left-aside mt-5">
        <h6 className="heading-small-text-9">Tags</h6>
        {result2.map((tag) => (
          <a
            href='!#'
            key={tag}
            onClick={(e) => {
              e.preventDefault();
              searchTags(tag);
            }}
          >
            {tag}
          </a>
        ))}
      </div>
    </div>
  );
};

export default RightSide;
