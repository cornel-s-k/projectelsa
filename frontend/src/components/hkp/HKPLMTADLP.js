import React from "react";
import { Link } from "react-router-dom";
import Footer from "../home/Footer";
import Header from "../home/Header"; // Add Header
import "bootstrap/dist/css/bootstrap.min.css";

const HKPLMTADLP = () => {
  return (
    <div className="bg-white">
      <Header />
      <div className="container py-5 my-5">
        <div className="text-center mb-5">
          <h1 className="fw-bold mb-3 text-secondary animate__animated animate__fadeInDown">
            Hak dan Kewajiban Pengguna Layanan
          </h1>
          <h2 className="fw-bold display-5 text-dark animate__animated animate__fadeIn">
            Mekanika Tanah dan Akuisisi Data Lapangan Pesisir
          </h2>
          <hr className="w-25 mx-auto border-2 my-4" />
        </div>

        <div className="row g-5">
          {/* Hak Pengguna */}
          <div className="col-lg-6 animate__animated animate__fadeInLeft">
            <div className="card shadow-lg border-0 h-100 p-4 rounded-4 custom-card-hak">
              <div className="card-body">
                <h3 className="card-title fw-bold text-white mb-4">
                  Hak Pengguna Layanan
                </h3>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item bg-transparent border-0 px-0 text-white">
                    <i className="bi bi-check-circle-fill me-2"></i>Mendapatkan Layanan Sesuai Standar: Pengguna berhak mendapatkan layanan sesuai dengan spesifikasi dan standar teknis yang telah disepakati, termasuk dalam hal analisis ukuran butiran, pengambilan sampel, dan pengukuran data.
                  </li>
                  <li className="list-group-item bg-transparent border-0 px-0 text-white">
                    <i className="bi bi-check-circle-fill me-2"></i>Akses Data dan Informasi: Pengguna berhak menerima hasil data, laporan, dan dokumentasi dari setiap layanan yang digunakan, seperti hasil pengukuran batimetri, data GPS geodetik, atau pemetaan udara.
                  </li>
                  <li className="list-group-item bg-transparent border-0 px-0 text-white">
                    <i className="bi bi-check-circle-fill me-2"></i>Jaminan Kerahasiaan Data: Pengguna berhak atas kerahasiaan semua data dan informasi yang diberikan atau diperoleh selama proses layanan.
                  </li>
                  <li className="list-group-item bg-transparent border-0 px-0 text-white">
                    <i className="bi bi-check-circle-fill me-2"></i>Pelayanan yang Profesional: Pengguna berhak mendapatkan pelayanan yang profesional, transparan, dan tepat waktu dari penyedia layanan.
                  </li>
                  <li className="list-group-item bg-transparent border-0 px-0 text-white">
                    <i className="bi bi-check-circle-fill me-2"></i>Pengajuan Keluhan dan Umpan Balik: Pengguna berhak menyampaikan keluhan, saran, atau umpan balik terkait kualitas layanan yang diterima.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Kewajiban Pengguna */}
          <div className="col-lg-6 animate__animated animate__fadeInRight">
            <div className="card shadow-lg border-0 h-100 p-4 rounded-4 custom-card-kewajiban">
              <div className="card-body">
                <h3 className="card-title fw-bold text-white mb-4">
                  Kewajiban Pengguna Layanan
                </h3>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item bg-transparent border-0 px-0 text-white">
                    <i className="bi bi-x-circle-fill me-2"></i>Memberikan Informasi Akurat: Pengguna wajib memberikan informasi yang lengkap dan akurat mengenai lokasi survei, tujuan proyek, dan kebutuhan spesifik lainnya.
                  </li>
                  <li className="list-group-item bg-transparent border-0 px-0 text-white">
                    <i className="bi bi-x-circle-fill me-2"></i>Menyediakan Akses Lokasi: Pengguna wajib memfasilitasi dan memastikan akses ke lokasi survei atau pengambilan sampel, baik untuk layanan survei topografi, hidrografi, maupun pengambilan sampel beton atau sedimen.
                  </li>
                  <li className="list-group-item bg-transparent border-0 px-0 text-white">
                    <i className="bi bi-x-circle-fill me-2"></i>Mematuhi Prosedur dan Aturan: Pengguna wajib mematuhi semua prosedur, standar keselamatan, dan aturan yang ditetapkan oleh penyedia layanan.
                  </li>
                  <li className="list-group-item bg-transparent border-0 px-0 text-white">
                    <i className="bi bi-x-circle-fill me-2"></i>Melakukan Pembayaran Tepat Waktu: Pengguna wajib menyelesaikan pembayaran sesuai dengan kesepakatan dan jadwal yang telah ditetapkan.
                  </li>
                  <li className="list-group-item bg-transparent border-0 px-0 text-white">
                    <i className="bi bi-x-circle-fill me-2"></i>Menggunakan Hasil Layanan Sesuai Peruntukan: Pengguna bertanggung jawab untuk menggunakan data dan hasil layanan sesuai dengan tujuan yang disepakati dan tidak menyalahgunakannya.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Tombol Kembali ke Home */}
        <div className="text-center mt-5 animate__animated animate__fadeInUp">
          <Link to="/" className="btn btn-secondary btn-lg rounded-pill shadow-sm custom-btn">
            <i className="bi bi-arrow-left me-2"></i> Kembali ke Home
          </Link>
        </div>
      </div>
      <Footer />
      <style jsx>{`
        .container {
          max-width: 1200px;
        }

        .custom-card-hak {
          background-color: #e6f7ff;
          background-image: linear-gradient(135deg, #119430 0%, #17a94b 100%);
          color: white;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .custom-card-hak:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);
        }

        .custom-card-kewajiban {
          background-color: #fff3e6;
          background-image: linear-gradient(135deg, #d4222f 0%, #f44336 100%);
          color: white;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .custom-card-kewajiban:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);
        }

        .list-group-item i {
          font-size: 1.25rem;
        }

        .custom-btn {
          background-color: #a8a196;
          border-color: #a8a196;
          transition: background-color 0.3s ease, transform 0.3s ease;
        }
        .custom-btn:hover {
          background-color: #8c847a;
          border-color: #8c847a;
          transform: translateY(-3px);
        }
      `}</style>
    </div>
  );
};

export default HKPLMTADLP;