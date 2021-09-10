import React, { useState } from "react";

const SignUp = () => {
  const initialState= {
    name: "",
    email: "",
    password: "",
    confirm: ""
  }
  const [state, setState] = useState(initialState);
  const handleInput = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(state);
  };
  //for handling submission from form
  const verifyPass = ({password, confirm}) => {
    if (password === confirm) {
      return true;
    } else {
      return false;
    }
  };

  const resetForm=()=>{
    setState(initialState);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if(verifyPass(state)){
      console.log("hello");
      resetForm();
    }
    else{
      console.log("passwords donot match");
    }
  };

  return (
    <div>
      <div id="signup-container">
        <div id="header">
          <h1>Welcome, Sign Up</h1>
        </div>
        <div id="form">
          <form onSubmit={handleSubmit}>
            <input
              type="name"
              placeholder="Name"
              id="name"
              name="name"
              value={state.name}
              onChange={(event) => handleInput(event)}
            />
            <br />
            <input
              type="email"
              placeholder="Email"
              id="email"
              name="email"
              value={state.email}
              onChange={(e) => handleInput(e)}
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              id="password"
              name="password"
              value={state.password}
              onChange={(e) => handleInput(e)}
            />{" "}
            <br />
            <input
              type="password"
              placeholder=" confirm Password"
              id="Confirm password"
              name="confirm"
              value={state.confirm}
              onChange={(e) => handleInput(e)}
            />{" "}
            <br />
            {/* Added type = submit for making form submission */}
            <button type="submit" id="signup">
              Sign Up
            </button>
            <br />
            <p style={{ color: "white", float: "right", marginBottom: "20px" }}>
              Have an Account?{" "}
              <span className="span-text">
                {/* changed href from login.html to /login */}
                <a href="/login">Sign In</a>
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

export default SignUp;
