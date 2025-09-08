import React from "react";
import { Link } from "react-router-dom";
import Footer from "../home/Footer";
import Header from "../home/Header"; // Add Header
import "bootstrap/dist/css/bootstrap.min.css";

const HKPLMFDP = () => {
  return (
    <div className="bg-white">
      <Header />
      <div className="container py-5 my-5">
        <div className="text-center mb-5">
          <h1 className="fw-bold mb-3 text-secondary animate__animated animate__fadeInDown">
            Hak dan Kewajiban Pengguna Layanan
          </h1>
          <h2 className="fw-bold display-5 text-dark animate__animated animate__fadeIn">
            Model Fisik Dinamika Pantai
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
                    <i className="bi bi-check-circle-fill me-2"></i>Akses data hasil pengujian melalui RIN.
                  </li>
                  <li className="list-group-item bg-transparent border-0 px-0 text-white">
                    <i className="bi bi-check-circle-fill me-2"></i>Mengetahui informasi atau update terkait progress pengujian.
                  </li>
                  <li className="list-group-item bg-transparent border-0 px-0 text-white">
                    <i className="bi bi-check-circle-fill me-2"></i>Hak akses ruangan untuk diskusi.
                    <br />
                    <small className="text-white fst-italic ps-4">
                      *Saluran gelombang beton dan tsunami (Ruang diskusi Utara), saluran gelombang kaca dan kolam gelombang (Ruang diskusi Selatan Lt. 2).
                    </small>
                  </li>
                  <li className="list-group-item bg-transparent border-0 px-0 text-white">
                    <i className="bi bi-check-circle-fill me-2"></i>Melihat daftar penggunaan fasilitas (kapan terpakai dan kapan iddle).
                  </li>
                  <li className="list-group-item bg-transparent border-0 px-0 text-white">
                    <i className="bi bi-check-circle-fill me-2"></i>Apabila diperlukan dapat mendapatkan data tambahan dari data visual CCTV (dikomunikasikan lebih lanjut dengan pelaksana layanan sesuai dengan ketersediaan sumber daya).
                  </li>
                  <li className="list-group-item bg-transparent border-0 px-0 text-white">
                    <i className="bi bi-check-circle-fill me-2"></i>Dapat menggunakan fasilitas pengujian dengan durasi paling lama sebagai berikut:
                    <br />
                    <small className="text-white fst-italic ps-4">
                      *Saluran gelombang dan tsunami: 3 bulan; Kolam gelombang: 4 bulan.
                    </small>
                  </li>
                  <li className="list-group-item bg-transparent border-0 px-0 text-white">
                    <i className="bi bi-check-circle-fill me-2"></i>Apabila dalam waktu H-2 pekan sebelum fasilitas selesai, dapat menggunakan kembali jika belum ada pengguna lain.
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
                    <i className="bi bi-x-circle-fill me-2"></i>Pengguna memahami standar pelayanan laboratorium sesuai dengan fasilitas/layanan pengujian yang akan digunakan.
                  </li>
                  <li className="list-group-item bg-transparent border-0 px-0 text-white">
                    <i className="bi bi-x-circle-fill me-2"></i>Melakukan pembuatan model uji yang sesuai dengan kaidah pemodelan dengan berkoordinasi dengan pelaksana layanan.
                  </li>
                  <li className="list-group-item bg-transparent border-0 px-0 text-white">
                    <i className="bi bi-x-circle-fill me-2"></i>Menyediakan detail skenario pengujian.
                  </li>
                  <li className="list-group-item bg-transparent border-0 px-0 text-white">
                    <i className="bi bi-x-circle-fill me-2"></i>Apabila terdapat dua atau lebih layanan yang direncanakan masuk dalam waktu yang sama, maka calon pengguna layanan melakukan antrian penggunaan fasilitas dengan urutan prioritas sebagai berikut:
                    <br />
                    <small className="text-white fst-italic ps-4">
                      a. Model uji sudah jadi dan sudah sesuai dengan persyaratan laboratorium.
                      <br />
                      b. Durasi pengujian (durasi tercepat akan lebih diprioritaskan).
                      <br />
                      c. Apabila model uji belum siap, bersedia untuk ttd surat pernyataan bahwa model akan siap H-2 pekan sebelum jadwal pengujian.
                    </small>
                  </li>
                  <li className="list-group-item bg-transparent border-0 px-0 text-white">
                    <i className="bi bi-x-circle-fill me-2"></i>Menyiapkan media penyimpanan untuk backup data hasil pengujian (hardisk).
                  </li>
                  <li className="list-group-item bg-transparent border-0 px-0 text-white">
                    <i className="bi bi-x-circle-fill me-2"></i>Mengambil kembali model uji setelah selesai dilakukan pengujian.
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

export default HKPLMFDP;