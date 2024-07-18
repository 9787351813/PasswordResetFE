import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Alert } from 'react-bootstrap';
import '../styles.css'; // Import the custom CSS

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      setMessage('Login successful!');
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        navigate('/dashboard');
      }, 3000);
    } catch (err) {
      if (err.response) {
        setMessage('Incorrect email or password');
      } else if (err.request) {
        setMessage('No response from server');
      } else {
        setMessage(`Error: ${err.message}`);
      }
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
        <Link to="/forgot-password" className="btn btn-link d-block mt-3 text-center">Forgot Password?</Link>
        
        {showPopup && (
          <Alert variant="info" className="mt-3 popup-message">
            {message}
          </Alert>
        )}
      </div>
    </div>
  );
};

export default Login;
