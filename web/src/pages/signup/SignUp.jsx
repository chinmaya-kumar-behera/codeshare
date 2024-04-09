import React from "react";
import Header from "../../views/Header";

const SignUp = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <h1 className="is-title">Sign up to save code</h1>
        <div className="login-form-container">
          <form className="full-width">
            <div className="form-field">
              <label for="name">Your full name</label>
              <input
                type="text"
                name="name"
                id="name"
                label="Your full name"
                autofocus=""
                autoComplete="name"
                required=""
                value=""
              />
            </div>
            <div className="form-field">
              <label for="email">Email address</label>
              <input
                type="email"
                name="email"
                id="email"
                label="Email address"
                autoComplete="email"
                required=""
                value=""
              />
            </div>
            <div className="form-field">
              <label for="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                label="Password"
                autoComplete="new-password"
                required=""
                value=""
              />
            </div>
            <span className="text-success"></span>
            <span id="error">Error: </span>
            <button className="btn btn-primary" type="submit">
              Sign Up
            </button>
          </form>
          <p className="aligncenter">
            Already signed up? <a href="/login">Log in here</a>.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignUp;
