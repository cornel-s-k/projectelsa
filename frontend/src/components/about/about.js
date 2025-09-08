import React from "react";
import "../../Custom.css";
import Header from "../home/Header";
import Footer from "../home/Footer";
import pimpinan from "../../assets/about/pimpinan.jpg";
import { Link } from "react-router-dom"; 

const About = () => {
  return (
    <>
      <Header />
      <section className="about-section py-5 bg-light">
        <div className="container">
          {/* Section: Tugas dan Fungsi */}
          <div className="mb-5 text-center">
            <h2 className="fw-bold mb-3 text-dark">
              Tugas dan <span className="text-danger">Fungsi</span>
            </h2>
            <p className="lead text-muted">
              Laboratorium Dinamika Pesisir dan Rekayasa Pantai memiliki peran
              penting dalam mendukung penelitian, pendidikan, dan pengabdian
              masyarakat. Fungsi utama laboratorium adalah:
            </p>
            <ul className="list-unstyled text-muted text-start d-inline-block">
              <li>✅ Memfasilitasi kegiatan terkait Dinamika Pesisir dan Rekayasa Pantai</li>
              <li>✅ Pengembangan riset & metodologi di bidang pesisir</li>
              <li>✅ Posisi strategis laboratorium:</li>
              <li>1. Keterlibatan Proyek Strategis Nasional Tanggul Laut</li>
              <li>2. Mendukung infrastruktur maritim & sumber daya pesisir</li>
              <li>3. Mendukung Program Strategi BRIN → Pusat Inovasi Maritim</li>
            </ul>
          </div>

          {/* Section: Struktur Organisasi */}
          <div className="mb-5 text-center">
            <h2 className="fw-bold mb-3 text-dark">
              Struktur <span className="text-danger">Organisasi</span>
            </h2>
            <p className="lead text-muted">
              Struktur organisasi laboratorium dirancang untuk mendukung
              kolaborasi yang efektif antara pimpinan, staf peneliti, teknisi, dan
              mahasiswa.
            </p>
            <div className="my-4">
              <img
                src="https://via.placeholder.com/800x400"
                alt="Struktur Organisasi"
                className="img-fluid rounded shadow hover-zoom"
              />
            </div>
          </div>

          {/* Section: Pimpinan */}
          <div className="text-center">
            <h2 className="fw-bold mb-3 text-dark">
              Pimpinan <span className="text-danger">Laboratorium</span>
            </h2>
            <p className="lead text-muted mb-4">
              Berikut adalah jajaran pimpinan yang mengelola Laboratorium Dinamika
              Pesisir dan Rekayasa Pantai.
            </p>
            <div className="row justify-content-center">
              {[
                { nama: "Dr. Andi Pratama", jabatan: "Kepala Laboratorium" },
                { nama: "Ir. Siti Rahma, M.T.", jabatan: "Wakil Kepala" },
                { nama: "Dr. Budi Santoso", jabatan: "Koordinator Penelitian" },
              ].map((item, index) => (
                <div key={index} className="col-md-4 mb-4">
                  <div className="card h-100 shadow border-0 hover-lift">
                    <img
                      src={pimpinan}
                      className="card-img-top"
                      alt={item.jabatan}
                    />
                    <div className="card-body">
                      <h5 className="card-title fw-bold">{item.nama}</h5>
                      <p className="card-text text-muted">{item.jabatan}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tombol ke Home */}
          <div className="text-center mt-5">
            <Link to="/" className="btn btn-danger px-4 py-2 fw-bold shadow">
              ⬅ Kembali ke Home
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
