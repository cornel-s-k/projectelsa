import React from "react";
import "../../Custom.css";
import Header from "../home/Header";
import Footer from "../home/Footer";
import pimpinan from "../../assets/about/pimpinan.jpg";

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
            <ul className="list-unstyled text-muted">
              <li>✔️ Melaksanakan riset di bidang pesisir dan pantai</li>
              <li>✔️ Memberikan layanan pengujian dan analisis data</li>
              <li>✔️ Menyediakan solusi rekayasa pantai yang berkelanjutan</li>
              <li>✔️ Menjalin kolaborasi dengan akademisi, industri, dan pemerintah</li>
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
                className="img-fluid rounded shadow"
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
              {/* Card 1 */}
              <div className="col-md-4 mb-4">
                <div className="card h-100 shadow border-0">
                  <img
                    src={pimpinan}
                    className="card-img-top"
                    alt="Kepala Laboratorium"
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">Dr. Andi Pratama</h5>
                    <p className="card-text text-muted">Kepala Laboratorium</p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="col-md-4 mb-4">
                <div className="card h-100 shadow border-0">
                  <img
                    src={pimpinan}
                    className="card-img-top"
                    alt="Wakil Kepala"
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">Ir. Siti Rahma, M.T.</h5>
                    <p className="card-text text-muted">Wakil Kepala</p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="col-md-4 mb-4">
                <div className="card h-100 shadow border-0">
                  <img
                    src={pimpinan}
                    className="card-img-top"
                    alt="Koordinator Penelitian"
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">Dr. Budi Santoso</h5>
                    <p className="card-text text-muted">Koordinator Penelitian</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
