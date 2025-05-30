import React, { useState, useRef } from "react";

const Loginpage = ({ setLoginData }) => {
  const email = useRef();
  const password = useRef();
  const [userdetail, setUserdetail] = useState({});

  const handleClick = (e) => {
    e.preventDefault();

    const emailVal = email.current.value;
    const passwordVal = password.current.value;

    const userData = { email: emailVal, password: passwordVal };

    setUserdetail(userData);       
    setLoginData(userData);         
    email.current.value = '';
    password.current.value = '';
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="card p-4 shadow" style={{ width: "100%", maxWidth: "400px" }}>
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={handleClick}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
              required
              ref={email}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              required
              ref={password}
            />
          </div>

          <div className="d-grid gap-2 mb-3">
            <button type="submit" className="btn btn-primary">Login</button>
          </div>

          <div className="text-center">
            <small>
              Don't have an account? <a href="/signup">Sign up</a>
            </small>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Loginpage;
