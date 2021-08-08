import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState(null); // for input value of email field
  const [password, setPassword] = useState(null); // for input value of password field

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email, password });
  };
  return (
    <div>
    {/* styling should go in index.css file */}
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\n\t\th1 {\n\t\t\tfont-size: 30px;\n\t\t\tcolor: white;\n\t\t\t/* padding-top: 10px; */\n\t\t}\n\n\t\t#signup-container {\n\t\t\ttext-align: center;\n\t\t\twidth: fit-content;\n\t\t\tbackground-color: #0c4972;\n\t\t\tborder-radius: 12px;\n\t\t\tmargin-left: auto;\n\t\t\tmargin-right: auto;\n\t\t\tpadding: 20px;\n\t\t\tmargin-top: 72px;\n\t\t\tmargin-bottom: 100px;\n\t\t\tborder: 5px white solid;\n\t\t}\n\n\t\t#header {\n\t\t\tpadding-top: 20px;\n\t\t\tpadding-bottom: 20px;\n\t\t}\n\n\t\t#form {\n\t\t\t/* margin-left: 90px; */\n\t\t\tpadding: 30px;\n\t\t\ttext-align: center;\n\t\t}\n\n\t\t#form button {\n\t\t\tmargin: 20px;\n\t\t\twidth: 250px;\n\t\t\tborder-radius: 10px;\n\t\t\tbackground-color: #FF6E65;\n\t\t\tcolor: white;\n\t\t\tpadding: 20px;\n\t\t\toutline-color: transparent;\n\t\t}\n\n\t\t#form input {\n\t\t\tmargin-bottom: 20px;\n\t\t\twidth: 250px;\n\t\t\tpadding: 20px;\n\t\t\tborder-radius: 10px;\n\n\t\t}\n\n\t\t.span-text a {\n\t\t\tcolor: #FF6E65;\n\t\t\ttext-decoration: none;\n\t\t}\n\n\t\ta:visited {\n\t\t\tcolor: white;\n\t\t}\n\n\t\t.span-text {\n\t\t\tcolor: #FF6E65;\n\t\t\tfont-weight: 600;\n\t\t}\n\t",
          
      }}
    />
    {/* //style */}

    <div id="signup-container">
      <div id="header">
        <h1>Welcome, Sign In</h1>
      </div>
      <div id="form">
        {/* Added form for making submissions */}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            id="email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            id="password"
            onChange={(event) => setPassword(event.target.value)}
          />{" "}
          <br />

          {/* Added type = submit for making form submission */}
          <button type="submit" id="signup">
            Sign In
          </button>
          <br />
          <p style={{ color: "white", float: "right", marginBottom: "20px" }}>
            Don't Have an Account?{" "}
            <span className="span-text">
              {/* changed href from login.html to /login */}
              <a href="/SignUp">Sign Up</a>
            </span>
          </p>
        </form>
        {/* // form tag added */}
      </div>
    </div>
    <button id="movetop" title="Go to top">
      <span className="fa fa-level-up" aria-hidden="true" />
    </button>
  </div>
);
};

export default Login;
   

