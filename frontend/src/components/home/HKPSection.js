import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Import your images here
import hkp1 from "../../assets/home/mfdp.png";
import hkp2 from "../../assets/home/SHIAS.jpeg";
import hkp3 from "../../assets/home/mtallp.png";

const HKPSection = () => {
  const hkpData = [
    {
      code: "HKPL-MFDP",
      title: "Hak dan Kewajiban Pengguna Layanan Model Fisik Dinamika Pantai",
      image: hkp1,
    },
    {
      code: "HKPL-SHIAS",
      title: "Hak dan Kewajiban Pengguna Layanan Simulasi Hidro-Oseanografi & Interaksi Air - Struktur",
      image: hkp2,
    },
    {
      code: "HKPL-MTADLP",
      title: "Hak dan Kewajiban Pengguna Layanan Mekanika Tanah dan Akuisisi Data Lapangan Pesisir",
      image: hkp3,
    },
  ];

  return (
    <section className="bg-light py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-2 text-black">Hak dan Kewajiban Pengguna(HKP)</h2>
          <p className="lead text-muted">
            Hak dan Kewajiban Pengguna Layanan di Laboratorium Dinamika Pesisir dan Rekayasa Pantai
          </p>
        </div>
        
        <div className="row g-4 justify-content-center">
          {hkpData.map((item, index) => (
            <div key={index} className="col-md-6 col-lg-4 d-flex">
              <div className="card h-100 shadow-sm rounded-3">
                <img src={item.image} className="card-img-top img-fluid rounded-top" alt={item.title} />
                <div className="card-body d-flex flex-column text-center">
                  <h5 className="card-title fw-bold mb-2">{item.code}</h5>
                  <p className="card-text text-muted small">{item.title}</p>
                  <a href="#" className="btn mt-auto details-btn">Lihat Detail</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
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
        .card {
          border: none;
        }
      `}</style>
    </section>
  );
};

export default HKPSection;