import React from "react";
import "./hero.css";
import appsList from "../data.json";
import { NavLink } from "react-router";

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
              src="src\assets\playStore.png"
              className="hero-playStore-logo"
            />
            Google Play
          </a>
          <a
            href="https://www.apple.com/app-store"
            target="new"
            className="hero-appStore-button"
          >
            <img src="src\assets\appStore.png" className="hero-appStore-logo" />
            App Store
          </a>
        </div>

        <img src="src\assets\hero.png" alt="" />
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

      <div id="trending-container">
        <div className="trending-texts">
          <p className="trending-title">Trending Apps</p>
          <p className="trending-subtitle">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div className="trending-gallery">
          {appsList.slice(0, 8).map((app) => (
            <div className="trending-card" key={app.id}>
              <div className="card-img">
                <img className="app-img" src={app.image} alt={app.title} />
              </div>
              <p className="card-title">
                {app.title} : {app.companyName}
              </p>
              <div className="card-stats">
                <div className="card-downloads">
                  <img
                    src="../src/assets/card-dl.svg"
                    className="card-stat-icon"
                    alt="downloads"
                  />
                  <p>
                    {app.downloads >= 1000000
                      ? `${(app.downloads / 1000000).toFixed(1)}M`
                      : `${(app.downloads / 1000).toFixed(1)}K`}
                  </p>
                </div>
                <div className="card-rating">
                  <img
                    src="../src/assets/card-rating.svg"
                    className="card-stat-icon"
                    alt="rating"
                  />
                  <p>{app.ratingAvg.toFixed(1)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <NavLink
          to="/all"
          className={"navbar-button allappsbutton"}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          All Apps
        </NavLink>
      </div>
    </>
  );
};

export default Hero;
