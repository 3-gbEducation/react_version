import React from 'react'
import './AdminContact.css'
const AdminContact = () => {
  return (
    <>
    <div className="admin-contact">
      <form >
        <h1>Edit Contact Page</h1>
        <div className="form-group">
        <input className="form-control input-contact"  type="text" placeholder="Company Address" />
        </div>
        <div className="form-group">
        <input className="form-control" type="text" placeholder="Moblie Number" />
        </div>
        <div className="form-group">
        <input className="form-control" type="email" placeholder="Email" />
        </div>
        <div className="form-group">
        <input className="form-control" type="email" placeholder="Customer Support" />
        </div>
        <button className="btn btn-primary button-contact" type="submit"> Submit </button>
      </form>
      </div>
    </>
  );
}

export default AdminContact
