import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <>
      <div id="hero-container">
        <p className="hero-title">
          We Build{" "}
          <span
            style={{
              color: "#7e43dd",
            }}
          >
            Productive
          </span>{" "}
          Apps
        </p>
        <p className="hero-subtitle">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>

        <div className="hero-buttons">
          <a
            href="https://play.google.com/store"
            target="new"
            className="hero-playStore-button"
          >
            <img
              src="../src/assets/playStore.png"
              className="hero-playStore-logo"
            />
            Google Play
          </a>
          <a
            href="https://www.apple.com/app-store"
            target="new"
            className="hero-appStore-button"
          >
            <img
              src="../src/assets/appStore.png"
              className="hero-appStore-logo"
            />
            App Store
          </a>
        </div>

        <img src="../src/assets/hero.png" alt="" />
      </div>

      <div id="hero-stats-container">
        <p className="hero-stats-title">Trusted by Millions, Built for You</p>

        <div className="hero-stats">
          <div className="hero-stat">
            <p className="stat-title">Total Downloads</p>
            <p className="stat-value">29.6M</p>
            <p className="stat-comment">21% more than last month</p>
          </div>
          <div className="hero-stat">
            <p className="stat-title">Total Reviews</p>
            <p className="stat-value">906K</p>
            <p className="stat-comment">46% more than last month</p>
          </div>
          <div className="hero-stat">
            <p className="stat-title">Active Apps</p>
            <p className="stat-value">132+</p>
            <p className="stat-comment">31 more will Launch</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
