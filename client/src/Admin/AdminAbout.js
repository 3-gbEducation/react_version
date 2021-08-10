import React from 'react'
import './AdminAbout.css'
const AdminAbout = () => {
  return (
    // <>
    // <div className="w3l-cutomer-main-cont">
    //   <div className="testimonials">
    //     <div className="container">
    //       <div className="row content-sec mt-md-8">
    //           <div className="col-lg-8 col-md-5 testi-sections mt-md-5 mt-4">
    //             <div className="testimonials_grid">
    //               <form>
    //                 <h1>Edit About Page</h1>
    //                 <textarea className="form-control textarea-about" rows="8" cols="80"placeholder="Mission" />
    //
    //                 <input className="input-about" type="number" placeholder="Learners & Counting" />
    //                 <input className="input-about" type="number" placeholder="Total Courses" />
    //                 <input className="input-about" type="number" placeholder="Successfull Student" />
    //                 <input className="input-about" type="number" placeholder="Languages" />
    //                 <button className="button-about" className="btn btn-primary" type="submit"> Submit </button>
    //               </form>
    //
    //             </div>
    //           </div>
    //
    //
    //       </div>
    //     </div>
    //   </div>
    // </div>
    //
    // </>
    <>
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
          <button className="button-about" className="btn btn-primary" type="submit"> Submit </button>
      </form>
      </div>
    </>
  );
}

export default AdminAbout
