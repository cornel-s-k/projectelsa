import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import heroBg from "../../assets/home/dashboard.jpeg";

const Herosection = () => {
  return (
    <section
      className="d-flex align-items-end position-relative text-white"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "70vh",
      }}
    >
      {/* Overlay */}
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>

      {/* Content */}
      <div className="container position-relative" style={{ paddingBottom: "10vh" }}>
        <h1
          className="fw-bold display-4 mb-2"
          style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}
        >
          Dashboard Layanan
        </h1>
        <h2
          className="fw-bold display-5"
          style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}
        >
          <span style={{ color: "white" }}>Laboratorium </span>{" "}
          <span style={{ color: "red" }}>Dinamika Pesisir</span>
          <br />
          <span style={{ color: "white" }}>dan</span>{" "}
          <span style={{ color: "red" }}>Rekayasa Pantai</span>
        </h2>
        <p className="lead col-md-8">
          Selamat datang di Dashboard Layanan Laboratorium Dinamika Pesisir dan
          Rekayasa Pantai. Di sini, kami menyediakan akses mudah bagi pengguna
          internal dan eksternal, sekaligus memperkenalkan kompetensi, fasilitas,
          dan inovasi laboratorium kami.
        </p>
      </div>
    </section>
  );
};

export default Herosection;