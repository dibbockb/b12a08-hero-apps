import React from "react";
import "./appinfo.css";
import { useState } from "react";
import { useParams } from "react-router";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import dlico from "/icon-downloads.png";
import ratingico from "/icon-ratings.png";
import reviewsico from "/icon-review.png";
import appsList from "../data.json";
import { ToastContainer, toast } from "react-toastify";

const Appinfo = () => {
  const { id } = useParams();
  const app = appsList.find((app) => app.id === parseInt(id));

  if (!app) {
    return <div>No app foubd</div>;
  }

  const [isInstalled, setIsInstalled] = useState(false);

  return (
    <>
      <Navbar />

      <div id="appinfo-container">
        <div className="app-info">
          <img className="appinfo-img" src={app.image} alt={app.title} />
          <div className="appinfo-text">
            <p className="appinfo-title">{app.title}</p>
            <p className="appinfo-maker">
              <span className="text-light">Developed by</span> {app.companyName}
            </p>
            <hr className="hr-break" />
            <div className="app-stats">
              <div className="download-stat">
                <img className="stat-ico" src={dlico} alt="" />
                <p className="stat-text">Downloads</p>
                <p className="appinfo-stat-value">
                  {app.downloads >= 1000000
                    ? `${(app.downloads / 1000000).toFixed(1)}M`
                    : `${(app.downloads / 1000).toFixed(1)}K`}
                </p>
              </div>

              <div className="download-stat">
                <img className="stat-ico" src={ratingico} alt="" />
                <p className="stat-text">Average Rating</p>
                <p className="appinfo-stat-value">{app.ratingAvg.toFixed(1)}</p>
              </div>

              <div className="download-stat">
                <img className="stat-ico" src={reviewsico} alt="" />
                <p className="stat-text">Total Reviews</p>
                <p className="appinfo-stat-value">
                  {app.reviews >= 1000000
                    ? `${(app.reviews / 1000000).toFixed(1)}M`
                    : `${(app.reviews / 1000).toFixed(1)}K`}
                </p>
              </div>
            </div>
            <button
              className={`btn-install ${isInstalled ? "installed" : ""}`}
              onClick={() => {
                setIsInstalled(true);
                toast("Installed");
              }}
              disabled={isInstalled}
            >
              {isInstalled ? "Installed" : `Install Now (${app.size})`}
            </button>
          </div>
        </div>

        <div className="app-description">
          <p className="desc">
            Description:
            <br /> {app.description}
          </p>
        </div>
      </div>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default Appinfo;
