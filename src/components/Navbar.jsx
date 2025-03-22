import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink to="/" className="navbar-logo">
          Debug Competition
        </NavLink>
      </div>
      <div className="navbar-links">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "navbar-link active" : "navbar-link"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/competition"
          className={({ isActive }) =>
            isActive ? "navbar-link active" : "navbar-link"
          }
        >
          Competition
        </NavLink>
        <NavLink
          to="/sample-questions"
          className={({ isActive }) =>
            isActive ? "navbar-link active" : "navbar-link"
          }
        >
          Sample Questions
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? "navbar-link active" : "navbar-link"
          }
        >
          Login
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
