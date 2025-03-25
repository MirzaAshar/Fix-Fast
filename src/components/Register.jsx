import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { RegisterUser } from "../services/service";
import { Link } from "react-router-dom";

const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    teamname: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      const response = await RegisterUser(formData);

      setSuccess(response.message || "Registration successful!");
      console.log("Folder ID:", response.folderId);

      setFormData({
        teamname: "",
        username: "",
        email: "",
        password: "",
      });
    } catch (error) {
      setError(error.message);
      console.error("Registration error:", error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Fix Fast</h1>
        <p style={{ color: "#666" }}>Register your team</p>
      </div>
      {success && <div className="success-message">{success}</div>}

      {error && <div className="error-message">{error}</div>}

      <form id="registrationForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            required
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="teamname">Team Name</label>
          <input
            type="text"
            id="teamname"
            required
            value={formData.teamname}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              required
              value={formData.password}
              onChange={handleInputChange}
            />
            {showPassword ? (
              <FaEyeSlash
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <FaEye
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Register Now
        </button>
      </form>

      <div className="login-link">
        Already registered? <Link to="/login">Login here</Link>
      </div>
    </div>
  );
};

export default Register;
