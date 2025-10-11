import React from "react";
import "./error.css";
import { NavLink } from "react-router";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Error = () => {
  return (
    <>
      <Navbar></Navbar>
      <div id="error-container">
        <img src="../src/assets/error-404.png" alt="" className="error-img" />
        <p className="error-title">Oops, page not found!</p>
        <p className="error-subtitle">
          The page you are looking for is not available.
        </p>
        <NavLink className="navbar-button error-btn" to={"/all"}>
          All Apps
        </NavLink>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Error;
