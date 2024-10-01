import React from 'react';
import { useAuth } from '../context/AuthContext'; // Import the useAuth hook
import { Navigate } from 'react-router-dom';

const LoginForm = () => {
  const { isAuthenticated } = useAuth(); // Get the authentication state

  // Redirect to the home page if the user is already authenticated
  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="form-container">
      <h1>Login</h1>
      <div className="input-container">
        <i className="fas fa-user icon"></i> {/* Font Awesome user icon */}
        <input type="text" placeholder="Username or Email" />
      </div>
      <div className="input-container">
        <i className="fas fa-lock icon"></i> {/* Font Awesome lock icon */}
        <input type="password" placeholder="Password" />
      </div>
      <button className="signup-button">Log In</button>
    </div>
  );
};

export default LoginForm;

