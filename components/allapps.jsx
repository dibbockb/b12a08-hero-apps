import React, { useState } from "react";
import "./allapps.css";
import { NavLink } from "react-router";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

import appsList from "../data.json";

const All = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredApps = appsList.filter((app) =>
    app.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar></Navbar>
      <div id="allapps-container">
        <div className="allapps-text">
          <p className="allapps-title">Our All Applications</p>
          <p className="allapps-subtitle">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
        <div className="allapps-etc">
          <p className="total-apps-stat">({filteredApps.length}) Apps Found</p>
          <textarea
            className="apps-search"
            placeholder="Search All Apps"
            // value={input}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          ></textarea>
        </div>
        <div className="allapps-gallery">
          {filteredApps.length > 0 ? (
            filteredApps.map((app) => (
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
                      src="src\assets\card-dl.svg"
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
                      src="src\assets\card-rating.svg"
                      className="card-stat-icon"
                      alt="rating"
                    />
                    <p>{app.ratingAvg.toFixed(1)}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <img
                src="../src/assets/App-Error.png"
                alt=""
                className="no-search-result-img"
              />
              <p className="no-app-title">OPPS!! APP NOT FOUND</p>
              <p className="no-app-subtitle">
                The App you are requesting is not found on our system. please
                try another apps
              </p>

              <button
                onClick={() => setSearchTerm("")}
                className="navbar-button allappsbutton"
              >
                All Apps
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default All;
