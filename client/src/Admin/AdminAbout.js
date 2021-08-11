import React from 'react'
import './AdminAbout.css'
const AdminAbout = () => {
  return (
    <div className="admin-about">
        <form>
          <h1>Edit About Page</h1>
          <div className="form-group">
          <textarea className="form-control textarea-about" rows="8" cols="80"placeholder="Mission" />
          </div>
          <div className="form-group">
          <input className="form-control input-about" type="number" placeholder="Learners & Counting" />
          </div>
          <div className="form-group">
          <input className="form-control input-about" type="number" placeholder="Total Courses" />
          </div>
          <div className="form-group">
          <input className="form-control input-about" type="number" placeholder="Successfull Student" />
          </div>
          <div className="form-group">
          <input className="form-control input-about" type="number" placeholder="Languages" />
          </div>
          <button className="button-about btn btn-primary" type="submit"> Submit </button>
      </form>
      </div>
  );
}

export default AdminAbout
