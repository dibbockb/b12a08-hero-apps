import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <div id="navbar-container">
        <div className="navbar-left">
          <img className="navbar-logo" src="../src/assets/logo.png" alt="" />
          <p className="navbar-text">HERO.IO</p>
        </div>

        <div className="navbar-links">
          <p className="navbar-link">Home</p>
          <p className="navbar-link">Apps</p>
          <p className="navbar-link">Installation</p>
        </div>

        <a
          target="new"
          href="https://github.com/dibbockb"
          className="navbar-button"
        >
          <img src="../src/assets/github.png" className="nav-git-logo" />
          Contribute
        </a>
      </div>
    </>
  );
};

export default Navbar;
