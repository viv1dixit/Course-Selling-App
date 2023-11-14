// AdminLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './AdminLogin.css'; // Import the CSS file

const AdminLogin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3001/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'username': username,
          'password': password,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      console.log(data); // Handle the response as needed, e.g., save token to local storage
      toast.success('Logged in successfully');
      navigate('/dashboard'); // Redirect to the admin dashboard or any other page
    } catch (error) {
      console.error('Error logging in:', error.message);
      toast.error('Invalid username or password');
    }
  };

  return (
    <div className="admin-login-container">
      <h2>Admin Login</h2>
      <form>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleLogin} className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
