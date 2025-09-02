import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // penting untuk toggler
import logo from "../../assets/home/logo.png";
import "../../Custom.css"; // Import file CSS kustom

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          {/* Logo */}
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src={logo} style={{ height: "80px" }} alt="Logo" />
          </a>

          {/* Hamburger Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-lg-center">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Fasilitas
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Layanan
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  HKP
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Survey
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  FAQ
                </a>
              </li>
              <li className="nav-item ms-lg-3">
                <button
                  className="btn rounded-pill text-white btn-custom-hover"
                  style={{ backgroundColor: "#A8A196" }}
                >
                  Hubungi Kami
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
