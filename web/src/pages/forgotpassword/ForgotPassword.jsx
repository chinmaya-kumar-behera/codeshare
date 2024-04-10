import React from "react";
import Header from "../../views/header/Header";

const ForgotPassword = () => {
    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <h1 className="is-title">Forgot your password?</h1>
          <div className="login-form-container">
            <form className="full-width">
              <p>
                No problem, enter your email below and we'll send you
                instructions to reset it.
              </p>
              <div className="form-field">
                <label for="email">Email address</label>
                <input
                  name="email"
                  id="email"
                  type="text"
                  label="Email address"
                  autoComplete="email"
                  required=""
                  value=""
                />
              </div>
              <span className="text-success"></span>
              <span id="error">Error: </span>
              <button className="btn btn-primary" type="submit">
                Reset Password
              </button>
            </form>
            <p className="aligncenter">
              Remember your password? <a href="/login">Log in</a>.
            </p>
          </div>
        </div>
      </React.Fragment>
    );
};

export default ForgotPassword;
