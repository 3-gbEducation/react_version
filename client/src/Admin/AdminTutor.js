import React from 'react'
import './AdminTutor.css'
const AdminTutor = () => {
  return (
    <>
      <div className="admin-tutor">
        <form>
          <h1>Add a New Tutor</h1>
          <div className="form-group">
          <input className="form-control input-tutor" type="text" placeholder="Name" />
          </div>
          <div className="form-group">
          <input className="form-control" type="text" placeholder="Subjects" />
          </div>
          <div className="form-group">
          <input className="form-control" type="text" placeholder="Days" />
          </div>
          <div className="form-group">
          <input className="form-control" type="text" placeholder="Language Known" />
          </div>
          <div className="form-group">
          <input className="form-control" type="text" placeholder="Time Slot" />
          </div>
          <div className="form-group">
          <input className="form-control" type="text" placeholder="Fees Range" />
          </div>
          <div className="form-group">
          <textarea className="form-control" rows="5" cols="100"placeholder="About Yourself" />
          </div>
          <button className="btn btn-primary button-tutor" type="submit"> Submit </button>
        </form>

      </div>
    </>
  );
}

export default AdminTutor
