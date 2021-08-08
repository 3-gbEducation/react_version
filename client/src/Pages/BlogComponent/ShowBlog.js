import React, { useState, useEffect } from "react";
import moment from "moment";
import { useParams } from "react-router";
import { blogs } from "./data-helper";
import RightSide from "./RightSide";

const ShowBlog = () => {
  const [blog, setBlog] = useState(null);
  let { id } = useParams();
  useEffect(() => {
    blogs.map((blog) => {
      if (blog.id === id) setBlog(blog);
    });
  }, []);
  console.log(blog);
  return (
    <div>
      {blog === null ? null : (
        <section className="w3l-blog">
          <div className="text-element-9 py-5">
            <div className="container py-md-5 py-4">
              <div className="row grid-text-9">
                <div className="col-lg-8">
                  <div className="single-bottom-blog">
                    <div className="top-bg bg-img">
                      <img
                        src={blog.image}
                        alt=""
                        className="img-fluid img-responsive"
                      />
                    </div>
                    <div className="bottom-grid mt-4 pt-md-2">
                      <ul className="blog-author-date mb-sm-4 mb-3 d-flex justify-content-between align-items-end">
                        <li className="author">
                          <a href={blog.authorLink}>
                            <i
                              className="fa fa-user mr-1"
                              aria-hidden="true"
                            ></i>
                            By {blog.author}
                          </a>
                        </li>
                        <li>
                          <i
                            className="fa fa-clock-o mr-1"
                            aria-hidden="true"
                          ></i>
                          {moment(blog.date).format("MMM DD, YYYY")}
                        </li>
                      </ul>
                      <h3>{blog.title} </h3>
                      <p>{blog.intro}</p>
                      <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                    </div>
                  </div>
                </div>

                <RightSide />
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ShowBlog;
