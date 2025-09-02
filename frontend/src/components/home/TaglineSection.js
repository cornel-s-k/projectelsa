import React from "react";
import heroBg from "../../assets/home/tagline.jpeg";

const TaglineSection = () => {
  return (
    <section
      className="hero-section text-white d-flex align-items-center"
    >
      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="container position-relative z-index-1 text-center text-md-start">
        <h1 className="fw-bold display-4 hero-title mb-3 text-black">
          Memberikan Layanan Terbaik untuk <span className="text-red">Pengkajian dan Pengembangan</span>
        </h1>
        <p className="lead hero-text col-md-8 mx-auto mx-md-0 mb-4">
          Laboratorium Dinamika Pesisir dan Rekayasa Pantai hadir untuk menyediakan layanan riset, pengujian, dan pengembangan metodologi dengan standar ilmiah tinggi.
        </p>
        <button className="btn btn-lg rounded-pill custom-btn">
          Hubungi kami
        </button>
      </div>

      <style jsx>{`
        .hero-section {
          background-image: url(${heroBg});
          background-size: cover;
          background-position: center;
          height: 60vh;
          position: relative;
        }
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(115, 68, 3, 0.4);
          z-index: 0;
        }
        .hero-title {
        position: center;
          font-size:1.5rem; /* Ukuran font lebih kecil untuk mobile */
        }
        .hero-text {
          font-size: 1rem; /* Ukuran font lebih kecil untuk mobile */
          position: center;
        }
        .text-red {
          color: #8E1616;
        }
        .custom-btn {
          background-color: #8E1616;
          color: #EAD196;
          border-color: #8E1616;
          transition: background-color 0.3s ease;
        }
        .custom-btn:hover {
          background-color: #730303;
          border-color: #730303;
        }
        
        /* Tambahkan CSS untuk bayangan oranye pada section */
        .hero-section {
          box-shadow: 0 0 20px rgba(234, 209, 150, 0.8);
        }

        @media (min-width: 768px) {
            .hero-title {
                font-size: 2.5rem; /*Ukuran font lebih kecil untuk desktop */
            }
            .hero-text {
                font-size: 1.25rem; /* Ukuran font lebih kecil untuk desktop */
            }
        }
      `}</style>
    </section>
  );
};

export default TaglineSection;