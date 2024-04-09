import React, { useState } from 'react'
import Header from '../../views/Header';

const Login = () => {
    const [loginData, setLoginData] = useState({ email: "", password: "" });

    const onChange= event => {
        const { name, value } = event.target;
        setLoginData((prev) => ({ ...prev, [name]: value }));
    }

    function onSubmitHandler(event) {
        event.preventDefault();
        console.log(loginData);
    }


    return (
      <main className="">
        <Header />
        <div className="">
          <div className="container">
            <h1 className="is-title">Log in to access your saved code</h1>
            <div className="login-form-container">
              <form className="full-width" onSubmit={onSubmitHandler}>
                <div className="form-field">
                  <label>Email address</label>
                  <input
                    name="email"
                    id="email"
                    type="email"
                    label="Email address"
                    autoComplete="email"
                    required=""
                    value={loginData.email}
                    onChange={onChange}
                  />
                </div>
                <div className="form-field">
                  <label>Password</label>
                  <input
                    name="password"
                    id="password"
                    type="password"
                    label="Password"
                    autoComplete="current-password"
                    required=""
                    value={loginData.password}
                    onChange={onChange}
                  />
                </div>
                {/* <span className="text-success"></span>
                <span id="error">Error: </span> */}
                <button className="btn btn-primary" type="submit">
                  Log in
                </button>
              </form>
              <p className="aligncenter">
                New to Codeshare? <a href="/register">Sign up here</a>.
              </p>
              <p className="aligncenter">
                <a href="/forgot-password?email=">Forgot your password?</a>
              </p>
            </div>
          </div>
        </div>
      </main>
    );
}

export default Login