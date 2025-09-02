import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TimelineLayanan = () => {
  return (
    <section className="timeline-layanan-section py-5">
      <div className="container py-5">
        <h2 className="text-center fw-bold mb-5">Timeline Layanan</h2>
        <div className="row justify-content-center align-items-center g-4">
          {/* Left Column: Text and Button */}
          <div className="col-lg-6 text-white text-center text-lg-start">
            <div className="p-4 rounded-3 timeline-text-box mx-auto">
              <p className="mb-4">
                Timeline layanan ini berfungsi sebagai daftar antrean digital
                yang menampilkan tahapan dan progres layanan Anda. Dengan begitu,
                pengguna dapat mengetahui posisi antrean serta perkiraan waktu
                penyelesaian. Untuk informasi lebih lengkap, silakan tekan tombol
                Lihat Detail.
              </p>
              <button className="btn btn-light rounded-3 fw-bold shadow-sm">
                Lihat Detail
              </button>
            </div>
          </div>

          {/* Right Column: Inline SVG dengan animasi */}
          <div className="col-lg-6">
            <div className="timeline-image-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 500 500"
                className="img-fluid"
              >
                <style>
                  {`
                    .animable {
                      transform-box: fill-box;
                      transform-origin: center;
                    }
                    @keyframes floating {
                      0% { transform: translateY(0px); }
                      50% { transform: translateY(-10px); }
                      100% { transform: translateY(0px); }
                    }
                    .floating {
                      animation: floating 3s ease-in-out infinite;
                    }
                  `}
                </style>

                {/* Contoh isi, ambil dari timeline.svg */}
                <g id="freepik--background-simple--inject-12" className="animable floating">
                  <path
                    d="M450,250c0,110.5-89.5,200-200,200S50,360.5,50,250,139.5,50,250,50,450,139.5,450,250Z"
                    fill="#8e1616"
                    opacity="0.2"
                  />
                </g>

                {/* 👉 Di sini lanjutkan semua isi <g> dan <path> dari timeline.svg asli */}
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .timeline-layanan-section {
          background-color: #8e1616;
        }
        h2 {
          color: white;
        }
        .timeline-text-box {
          background-color: rgba(138, 22, 22, 0.8);
        }
        .timeline-image-container {
          background-color: white;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }
        .btn-light {
          background-color: white;
          color: #8e1616;
        }
      `}</style>
    </section>
  );
};

export default TimelineLayanan;
