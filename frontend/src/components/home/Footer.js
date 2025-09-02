import React from "react";
import brinLogo from "../../assets/home/logo.png";
import { FaFacebookF, FaInstagram, FaXing, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3 mt-5 border-top border-secondary">
      <div className="container">
        {/* Konten Footer Utama */}
        <div className="row mb-5">
          {/* Logo & Kontak */}
          <div className="col-md-3 mb-4">
            <div className="d-flex align-items-center mb-3">
              <img
                src={brinLogo}
                alt="BRIN Logo"
                className="footer-logo me-2"
                style={{ height: "50px" }}
              />
              <h5 className="mb-0 fw-bold">BRIN</h5>
            </div>
            <p className="mb-1">labpantai@brin.go.id</p>
            <p className="mb-3">08119811586</p>
            <div>
              <a href="#" className="btn btn-outline-light btn-sm me-2 rounded-circle">
                <FaFacebookF />
              </a>
              <a href="#" className="btn btn-outline-light btn-sm me-2 rounded-circle">
                <FaInstagram />
              </a>
              <a href="#" className="btn btn-outline-light btn-sm me-2 rounded-circle">
                <FaXing />
              </a>
              <a href="#" className="btn btn-outline-light btn-sm rounded-circle">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Tautan Referensi */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold text-uppercase">Tautan Referensi</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Home</a></li>
              <li><a href="#" className="text-white text-decoration-none">Tentang</a></li>
              <li><a href="#" className="text-white text-decoration-none">Fasilitas</a></li>
              <li><a href="#" className="text-white text-decoration-none">Layanan</a></li>
              <li><a href="#" className="text-white text-decoration-none">Kontaks</a></li>
            </ul>
          </div>

          {/* Layanan Untuk */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold text-uppercase">Layanan Untuk</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Pelajar</a></li>
              <li><a href="#" className="text-white text-decoration-none">Mahasiswa</a></li>
              <li><a href="#" className="text-white text-decoration-none">Sekolah</a></li>
              <li><a href="#" className="text-white text-decoration-none">Universitas</a></li>
            </ul>
          </div>

          {/* Informasi & Subscribe */}
          <div className="col-md-4 mb-4">
            <div className="row">
              <div className="col-md-6">
                <h6 className="fw-bold text-uppercase">Informasi</h6>
                <ul className="list-unstyled">
                  <li><a href="#" className="text-white text-decoration-none">FAQ</a></li>
                  <li><a href="#" className="text-white text-decoration-none">HKP</a></li>
                  <li><a href="#" className="text-white text-decoration-none">Ulasan</a></li>
                </ul>
              </div>
              <div className="col-md-6">
                <h6 className="fw-bold text-uppercase">Subscribe to get updates</h6>
                <p className="small">Silahkan mendaftarkan email anda untuk mendapatkan informasi lebih cepat</p>
                <form>
                  <div className="mb-2">
                    <label htmlFor="emailInput" className="form-label small">Email</label>
                    <input type="email" className="form-control form-control-sm" id="emailInput" />
                  </div>
                  <button type="submit" className="btn btn-danger btn-sm w-100">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Garis pemisah */}
        <hr className="bg-secondary" />

        {/* Copyright */}
        <div className="text-center small">
          © {new Date().getFullYear()} BRIN Copyright
        </div>
      </div>
    </footer>
  );
}

export default Footer;