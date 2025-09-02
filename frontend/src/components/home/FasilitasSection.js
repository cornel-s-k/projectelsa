import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import fasilitas1 from "../../assets/home/fasil1.jpeg";
import fasilitas2 from "../../assets/home/fasil2.jpeg";
import fasilitas3 from "../../assets/home/fasil3.jpeg";

const FasilitasSection = () => {
  return (
    <section className="bg-white py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-2 text-black ">Fasilitas</h2>
          <p className="lead text-muted">
            Fasilitas modern dengan standar tinggi untuk mendukung riset dan layanan terbaik.
          </p>
        </div>
        
        <div className="row g-4 justify-content-center">
          {/* Card 1: Uji Model Fisik */}
          <div className="col-md-6 col-lg-4 d-flex">
            <div className="card h-100 shadow-sm rounded-3 fasilitas-card-custom">
              <img
                src={fasilitas1}
                className="card-img-top img-fluid rounded-top"
                alt="Uji Model Fisik"
              />
              <div className="card-body d-flex flex-column">
                <span className="text-success fw-bold small mb-2">Available</span>
                <h5 className="card-title fw-bold mb-2">Uji Model Fisik Dinamika Pantai</h5>
                <a href="#" className="btn mt-auto details-btn">Details</a>
              </div>
            </div>
          </div>

          {/* Card 2: Simulasi */}
          <div className="col-md-6 col-lg-4 d-flex">
            <div className="card h-100 shadow-sm rounded-3 fasilitas-card-custom">
              <img
                src={fasilitas2}
                className="card-img-top img-fluid rounded-top"
                alt="Simulasi Hidro-Oseanografi"
              />
              <div className="card-body d-flex flex-column">
                <span className="text-success fw-bold small mb-2">Available</span>
                <h5 className="card-title fw-bold mb-2">
                  Simulasi Hidro-Oseanografi & Interaksi Air Struktur
                </h5>
                <a href="#" className="btn mt-auto details-btn">Details</a>
              </div>
            </div>
          </div>
          
          {/* Card 3: Mekanika Tanah */}
          <div className="col-md-6 col-lg-4 d-flex">
            <div className="card h-100 shadow-sm rounded-3 fasilitas-card-custom">
              <img
                src={fasilitas3}
                className="card-img-top img-fluid rounded-top"
                alt="Mekanika Tanah"
              />
              <div className="card-body d-flex flex-column">
                <span className="text-success fw-bold small mb-2">Available</span>
                <h5 className="card-title fw-bold mb-2">
                  Mekanika Tanah dan Akuisisi Data Lapangan Pesisir
                </h5>
                <a href="#" className="btn mt-auto details-btn">Details</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .fasilitas-card-custom {
          background-color: #EFEFEF;
          border: none;
        }
        .details-btn {
          background-color: #A8A196;
          color: white;
          border: none;
        }
        .details-btn:hover {
          background-color: #8C847A;
          color: white;
        }
        .card-title {
          color: #8E1616;
        }
        .text-success {
          color: #4C9F4E !important;
        }
        .card-img-top {
          border-radius: 0.375rem 0.375rem 0 0 !important;
          height: 200px;
          object-fit: cover;
        }
        .card {
          overflow: hidden;
          min-height: 450px; /* Tambahkan baris ini untuk memanjangkan kotak */
        }
      `}</style>
    </section>
  );
};

export default FasilitasSection;