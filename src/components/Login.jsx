import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { LoginUser } from "../services/service";
import { Link } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await LoginUser(formData);

      console.log("Login successful:", response);
      setSuccess(response.message || "Login successful!");

      setFormData({
        email: "",
        password: "",
      });

      localStorage.setItem("token", response.token);
    } catch (error) {
      setError(error.message);
      console.error("Login error:", error);
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
        <h1>Welcome Back!</h1>
        <p style={{ color: "#666" }}>Login to continue</p>
      </div>
      {success && <div className="success-message">{success}</div>}

      {error && <div className="error-message">{error}</div>}
      <form id="loginForm" onSubmit={handleSubmit}>
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
          Login
        </button>
      </form>

      <div className="login-link">
        Don't have an account? <Link to="/register">Register here</Link>
      </div>
    </div>
  );
};

export default Login;
