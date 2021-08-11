import React from 'react'
import './AdminBlog.css'
const AdminBlog = () => {
  return (
    <>
      <div className="admin-blog">
        <form>
          <h1>Add Blog</h1>
          <div className="form-group">
          <input className="form-control input-blog" type="text" placeholder="Username" />
          </div>
          <div className="form-group">
          <textarea className="form-control textarea-blog" rows="15" cols="100"placeholder="Message" />
          </div>
          <button className="btn btn-primary button-blog" type="submit"> Submit </button>
        </form>
      </div>
    </>
  );
}

export default AdminBlog
