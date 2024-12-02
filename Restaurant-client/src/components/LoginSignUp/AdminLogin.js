
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './LoginSignUp.css';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        alert('Admin login successful!');
        navigate('/admin-dashboard'); // Redirect to admin dashboard
      } else {
        const data = await response.json();
        alert(data.message || 'Invalid username or password');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  const handleBack = () => {
    navigate('/'); // Navigate back to the home page
  };

  return (
    <div className="auth-container">
      
      <motion.div whileHover={{ scale: 1.2 }}>
        <div className="auth-form">
          <h2>Admin Login</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-input"
                placeholder="Enter Admin Username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-input"
                placeholder="Enter Admin Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn">
              Login
            </button>
          </form>
          <button className="btn back-btn" onClick={handleBack}>
            Back to Home
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
