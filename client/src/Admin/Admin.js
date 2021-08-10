import React from 'react'
import Sidebar from "./Sidebar.js"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminHome from './AdminHome.js'
import AdminContact from './AdminContact.js'
import AdminAbout from './AdminAbout.js'
import AdminTutor from './AdminTutor.js'
import AdminBlog from './AdminBlog.js'
import AdminIndex from './AdminIndex.js'
import ViewResponses from './ViewResponses.js'
import './Admin.css'


const Admin = () => {
    return (
<>
<Router>
  <div className="admin_side">
    <div className="sidebar">
      <Sidebar />
    </div>
    <div className="admin_body">
      <Switch>
          <Route path="/admin" exact component={AdminHome} />
          <Route path="/admin/home" exact component={AdminHome} />
          <Route path="/admin/editpagecontent/about" exact component={AdminAbout} />
          <Route path="/admin/editpagecontent/contact" exact component={AdminContact} />
          <Route path="/admin/editpagecontent/index" exact component={AdminIndex} />
          <Route path="/admin/editdata/tutor" exact component={AdminTutor} />
          <Route path="/admin/editdata/blogs" exact component={AdminBlog} />
          <Route path="/admin/viewformresponses" exact component={ViewResponses} />

      </Switch>

    </div>
  </div>



    </Router>
</>

    );
};

export default Admin
