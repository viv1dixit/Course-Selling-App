// AdminSignup.js
import React, { useState } from 'react';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import './AdminSignup.css'; // Import the CSS file

const AdminSignup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate()

    const handleSignup = async () => {
        try {
            const response = await fetch('http://localhost:3001/admin/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message);
            }

            console.log(data); // Handle the response as needed, e.g., redirect to a new page
            toast.success('Admin created successfully');
            navigate("/adminlogin")
        } catch (error) {
            console.error('Error signing up:', error.message);
            // setErrorMessage(error.message);
            toast.error('Admin already exists');
        }
    };

    return (
        <div className="admin-signup-container">
            <h2>Admin Signup</h2>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
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
                <button type="button" onClick={handleSignup} className="signup-button">
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default AdminSignup;
