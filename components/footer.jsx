import React from "react";
import "./footer.css";
import navLogo from "/logo.png";
import footerlogos from "/footer-logos.png";

const Footer = () => {
  return (
    <>
      <div id="footer-container">
        <div className="footer-content">
          <div className="footer-left">
            <div className="navbar-left">
              <img className="navbar-logo" src={navLogo} alt="" />
              <p className="footer-title">HERO.IO</p>
            </div>
            <p className="footer-subtitle">
              At HERO.IO, we craft innovative apps designed to make everyday
              life simpler, smarter, and more exciting. Our goal is to turn your
              ideas into digital experiences that truly make an impact.
            </p>
          </div>

          <div className="footer-links">
            <p className="footer-link-title">Social Links</p>
            <img className="footer-logo" src={footerlogos} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
