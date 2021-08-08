import React, { useState } from "react";
import moment from "moment";
import ReactPaginate from "react-paginate";

const LeftSide = ({ blogs, title }) => {
  const [pageNumber, setPageNumber] = useState(0);

  const blogPerPage = 3;
  const pagesVisited = pageNumber * blogPerPage;
  const pageCount = Math.ceil(blogs.length / blogPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
    window.scroll({
      top: 200,
      left: 100,
      behavior: "smooth",
    });
  };

  const displayBlogs = blogs
    .slice(pagesVisited, pagesVisited + blogPerPage)
    .map((blog) => (
      <div className="blog-article-post" key={blog.id}>
        <div className="blog-post d-flex flex-wrap align-content-between">
          <a href={`/blog/${blog.id}`}>
            <img src={blog.image} className="img-fluid" alt="blog-post-image" />
          </a>
          <div className="px-2 py-4">
            <ul className="blog-author-date d-flex justify-content-between mb-3">
              <li className="author">
                <a href={blog.authorLink}>
                  <i className="fa fa-user mr-1" aria-hidden="true"></i>By{" "}
                  {blog.author}
                </a>
              </li>
              <li>
                <i className="fa fa-clock-o mr-1" aria-hidden="true"></i>
                {moment(blog.date).format("MMM DD, YYYY")}
              </li>
            </ul>
            <h4 className="text-head-text-9">
              <a href={`/blog/${blog.id}`}>{blog.title}</a>{" "}
            </h4>
            <p className="mt-3" style={{ fontSize: "0.8rem" }}>
              {blog.intro}
            </p>
          </div>
        </div>
      </div>
    ));

  return (
    <div className="col-lg-8 leftSide" id="blogs">
      {title === "" ? (
        ""
      ) : (
        <div>
          <h4 style={{ fontWeight: "600" }}>{title}</h4>
          <hr />
          <br />
        </div>
      )}
      {blogs.length > 0 ? (
        displayBlogs
      ) : (
        <h1 className="mb-5">No blogs to show</h1>
      )}
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={pageCount}
        onPageChange={changePage}
        pageLinkClassName={"pageLink"}
        containerClassName={"pagination mx-3"}
        previousLinkClassName={"prev"}
        nextLinkClassName={"next"}
        disabledClassName={"disabled"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default LeftSide;
