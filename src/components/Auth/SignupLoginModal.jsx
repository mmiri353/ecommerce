import React, { useState } from 'react';
import axios from 'axios';
import './SignupLoginModal.css';

function SignupLoginModal({ show, onClose }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent default form submission

    // Prepare form data
    const formData = { email, password };

    // Determine which API endpoint to hit based on login or signup
    const apiUrl = isLogin
      ? 'http://localhost:8000/api/login'  // Laravel login route
      : 'http://localhost:8000/api/register';  // Laravel register route

    // Make API call using Axios
    axios
      .post(apiUrl, formData)  // Send form data in the body of the request
      .then((response) => {
        // On successful response
        console.log(response.data);
        onClose();  // Close modal after successful login/signup
      })
      .catch((err) => {
        // Handle error and display error message
        setError('Invalid credentials or something went wrong.');
        console.error(err.response?.data);
      });
  };

  return (
    show && (
      <div className="modal-overlay">
        <div className="modal-container">
          <button className="close-btn" onClick={onClose}>×</button>
          <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
          <form className="form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="error-message">{error}</p>}
            <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
          </form>
          <p onClick={() => setIsLogin(!isLogin)} className="toggle-auth">
            {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Login'}
          </p>
        </div>
      </div>
    )
  );
}

export default SignupLoginModal;
