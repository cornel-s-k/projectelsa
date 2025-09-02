import React from "react";
import tugasBg from "../../assets/home/tugas.jpeg";
import "../../Custom.css"; // Import file CSS kustom

const Tugas = () => {
  return (
    <section className="bg-white py-5 custom-margin-top">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Section: Image (hanya satu gambar) */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img
              src={tugasBg}
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Right Section: Text Content */}
          <div className="col-lg-6">
           <h2 className="display-5 fw-bold mb-3 text-dark">
              Mendukung Inovasi Melalui{" "}
              <span className="text-danger">Tugas dan Fungsi</span> Laboratorium
            </h2>
            <p className="lead text-muted mb-4">
              Laboratorium Dinamika Pesisir dan Rekayasa Pantai hadir sebagai
              pusat layanan riset, pengujian, dan inovasi. Kami mendukung solusi
              pesisir berkelanjutan, infrastruktur maritim, serta kolaborasi
              dengan akademisi, industri, dan pemerintah.
            </p>
            <a
              href="#"
              className="btn btn-primary btn-lg rounded-3 shadow custom-btn"
            >
              Pelajari Lebih Lanjut
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tugas;