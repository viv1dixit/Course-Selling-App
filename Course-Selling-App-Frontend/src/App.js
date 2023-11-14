import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminSignup from "./AdminSignUp";
import AdminLogin from "./AdminLogin";
import AdminDashboard from "./AdminDashboard";


function App() {
  return (
    <Router>
      <Routes>  
        <Route path="/" element={<AdminSignup/>} /> 
        <Route path="/adminlogin" element={<AdminLogin/>} />
        <Route path="/dashboard" element={<AdminDashboard/>} />
        {/* <Route path="/" component={} />
        <Route path="/" component={} /> */}
      </Routes>
      <ToastContainer />
  </Router>
  );
}

export default App;
