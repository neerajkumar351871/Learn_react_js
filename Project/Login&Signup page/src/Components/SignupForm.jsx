import React, { useState, useRef, useEffect, useRef as useRef2 } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const SignupForm = ({ setSignupData }) => {
  const [users, setUsers] = useState([]);
  const [alert, setAlert] = useState(null);
  const alertTimeoutRef = useRef(null);  // Ref to store timeout ID

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      FullName: nameRef.current.value.trim(),
      emailAddress: emailRef.current.value.trim(),
      password: passwordRef.current.value,
      confirmPassword: confirmPasswordRef.current.value,
    };

    if (newUser.password !== newUser.confirmPassword) {
      setAlert({ type: 'danger', message: 'Passwords do not match!' });
      clearTimeout(alertTimeoutRef.current);
      alertTimeoutRef.current = setTimeout(() => setAlert(null), 500);
      return;
    }

    setUsers((prevUsers) => [...prevUsers, newUser]);
    setAlert({ type: 'success', message: 'Account created successfully!' });
    clearTimeout(alertTimeoutRef.current);
    alertTimeoutRef.current = setTimeout(() => setAlert(null), 500);

    // Clear input fields
    nameRef.current.value = '';
    emailRef.current.value = '';
    passwordRef.current.value = '';
    confirmPasswordRef.current.value = '';
  };

  useEffect(() => {
    setSignupData(users);
  }, [users, setSignupData]);

  // Cleanup on unmount to clear timeout
  useEffect(() => {
    return () => clearTimeout(alertTimeoutRef.current);
  }, []);

  return (
    <div className="d-flex align-items-center justify-content-center bg-light vh-100">
      <div className="card shadow p-4" style={{ width: "100%", maxWidth: "500px" }}>
        <h2 className="text-center mb-4">Create an Account</h2>

        {alert && (
          <div className={`alert alert-${alert.type} text-center`} role="alert">
            {alert.message}
          </div>
        )}

        <form onSubmit={handleOnSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="John Doe"
              required
              ref={nameRef}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="signupEmail" className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="signupEmail"
              placeholder="name@example.com"
              required
              ref={emailRef}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="signupPassword" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="signupPassword"
              placeholder="Create a password"
              required
              ref={passwordRef}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="Re-enter your password"
              required
              ref={confirmPasswordRef}
            />
          </div>

          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-success">Sign Up</button>
          </div>

          <div className="text-center mt-3">
            <small>
              Already have an account? <a href="/login">Log in</a>
            </small>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
