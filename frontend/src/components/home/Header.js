import React from "react";
import { Link } from "react-router-dom"; // ⬅️ Tambah ini
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
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img src={logo} style={{ height: "80px" }} alt="Logo" />
          </Link>

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
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  Tentang
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/fasilitas">
                  Fasilitas
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/layanan">
                  Layanan
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/hkp">
                  HKP
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/survey">
                  Survey
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/faq">
                  FAQ
                </Link>
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
