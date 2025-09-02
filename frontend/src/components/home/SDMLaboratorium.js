import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Import 1 gambar saja
import bgImage1 from "../../assets/home/sdm.jpeg";

const SDMLaboratorium = () => {
  return (
    <section
      className="position-relative overflow-hidden sdm-section d-flex align-items-center"
      style={{
        backgroundImage: `url(${bgImage1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "80vh",
      }}
    >
      {/* Overlay biar teks tetap kebaca */}
      <div className="overlay"></div>

      {/* Foreground Card */}
      <div className="container position-relative z-index-1 d-flex justify-content-center justify-content-lg-end align-items-center h-100">
        <div className="card floating-card rounded-3 shadow-lg p-4">
          <div className="card-body">
            <h3 className="card-title fw-bold mb-3">SDM Laboratorium</h3>
            <p className="card-text text-muted mb-4">
              Laboratorium Dinamika Pesisir dan Rekayasa Pantai didukung oleh 40
              tenaga profesional dengan latar belakang pendidikan yang beragam,
              mulai dari jenjang SLTA hingga Doktor (S3). Keberagaman ini
              menjadikan laboratorium mampu menggabungkan keahlian teknis
              lapangan dengan pemikiran akademik tingkat lanjut. Selain itu,
              sejumlah staf juga sedang menempuh pendidikan lanjutan (S1, S2,
              hingga S3) melalui program tugas belajar, sehingga kapasitas
              keilmuan laboratorium terus berkembang dari waktu ke waktu.
            </p>
            <button className="btn btn-outline-secondary rounded-3">
              Lihat Detail
            </button>
          </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.4); /* gelapin background */
          z-index: 0;
        }
        .floating-card {
          max-width: 500px;
          background-color: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          z-index: 2;
        }
        .card-title {
          color: #8e1616;
        }
        .btn-outline-secondary {
          border-color: #a8a196;
          color: #a8a196;
        }
        .btn-outline-secondary:hover {
          background-color: #a8a196;
          color: white;
        }
        @media (max-width: 991.98px) {
          .floating-card {
            position: static;
            max-width: 90%;
            margin-top: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default SDMLaboratorium;
