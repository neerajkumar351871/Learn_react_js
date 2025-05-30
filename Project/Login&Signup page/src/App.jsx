import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Loginpage from './Components/Loginpage';
import SignupForm from './Components/SignupForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [mode, setMode] = useState('Login');
  const [loginData, setLoginData] = useState(null);
  const [signupData, setSignupData] = useState([]);
  const [matchedUser, setMatchedUser] = useState(null);
  const [showAlert, setShowAlert] = useState(false); 

  useEffect(() => {
    if (loginData && signupData.length > 0) {
      const user = signupData.find(
        (user) =>
          user.emailAddress === loginData.email &&
          user.password === loginData.password
      );
      setMatchedUser(user || null);
      setShowAlert(true);
    }
  }, [loginData, signupData]);
  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  return (
    <div className="bg-light min-vh-100">
      <Navbar setMode={setMode} />

      <div className="container mt-4">
        {loginData && showAlert && (
          <div className="row justify-content-center">
            <div className="col-md-6">
              {matchedUser ? (
                <div className="alert alert-success shadow text-center" role="alert">
                  Login successful! Welcome, {matchedUser.FullName || 'User'}.
                </div>
              ) : (
                <div className="alert alert-danger shadow text-center" role="alert">
                Invalid email or password.
                </div>
              )}
            </div>
          </div>
        )}

        <div className="row justify-content-center mt-3">
          <div className="col-md-8 col-lg-6">
            {mode === 'Login' ? (
              <Loginpage setLoginData={setLoginData} />
            ) : (
              <SignupForm
                setSignupData={setSignupData}
                signupData={signupData}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
