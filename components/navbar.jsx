import React from "react";
import "./navbar.css";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <>
      <div id="navbar-container">
        <NavLink
          to={"/"}
          className="navbar-left"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img className="navbar-logo" src="src\assets\logo.png" alt="" />
          <p className="navbar-text">HERO.IO</p>
        </NavLink>

        <div className="navbar-links">
          <NavLink to={"/"} className="navbar-link">
            Home
          </NavLink>
          <NavLink to={"/all"} className="navbar-link">
            Apps
          </NavLink>
          <NavLink to={"/installed"} className="navbar-link">
            Installation
          </NavLink>
        </div>

        <a
          target="new"
          href="https://github.com/dibbockb"
          className="navbar-button"
        >
          <img src="src\assets\github.png" className="nav-git-logo" />
          Contribute
        </a>
      </div>
    </>
  );
};

export default Navbar;
