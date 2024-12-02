
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import './LoginSignUp.css';

const LoginSignUp = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (isSignUp) {
        // Sign Up API call
        await axios.post('http://localhost:8000/api/user/signup', {
          username,
          email,
          password,
        });
        alert('Sign up successful!');
        navigate('/');
      } else {
        // Login API call
        await axios.post('http://localhost:8000/api/user/login', {
          email,
          password,
        });
        
        sessionStorage.setItem('userEmail', email); // Store user email in session storage
        alert('Login successful!');
        navigate('/');
      }
    } catch (error) {
      console.error(`${isSignUp ? 'Sign Up' : 'Login'} Error:`, error.message);
      const errorMessage = error.response?.data?.message || 'An error occurred';
      alert(`${isSignUp ? 'Sign Up' : 'Login'} failed: ${errorMessage}`);
    }
  };

  return (
    <div className="auth-container">
      <motion.div whileHover={{ scale: 1.2 }}>
        <div className="auth-form">
          <h2>{isSignUp ? 'User Signup' : 'User Login'}</h2>
          <form onSubmit={handleSubmit}>
            {isSignUp && (
              <div className="form-group">
                <label>Username</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Enter Your Username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  required
                />
              </div>
            )}
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-input"
                placeholder="Enter Your Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-input"
                placeholder="Password (min: 8 characters)"
                pattern=".{8,}"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn">
              {isSignUp ? 'Sign Up' : 'Login'}
            </button>
          </form>
          <p>
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
            <span onClick={() => setIsSignUp(!isSignUp)} className="toggle-form">
              {isSignUp ? 'Login' : 'Sign Up'}
            </span>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginSignUp;
