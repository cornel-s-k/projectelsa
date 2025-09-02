import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Import your images here
import image1 from "../../assets/home/3d.jpeg";
import image2 from "../../assets/home/2d.png";
import image3 from "../../assets/home/mike21.png";
import image4 from "../../assets/home/flow.jpeg";
import image5 from "../../assets/home/lapangan.png";

const LayananSection = () => {
  const services = [
    {
      title: "Sub Lab Model Fisik Dinamika Pantai",
      subtitle: "Sub Lab Model Fisik Dinamika Pantai",
      description: "Paket Pengujian Model Fisik di Kolam Gelombang 3D",
      image: image1,
    },
    {
      title: "Sub Lab Model Fisik Dinamika Pantai",
      subtitle: "Sub Lab Model Fisik Dinamika Pantai",
      description: "Paket Pengujian Model Fisik di Saluran Gelombang 2D",
      image: image2,
    },
    {
      title: "Sub Lab Simulasi Hidro-Oseanografi dan Interaksi Air-Struktur",
      subtitle: "Sub Lab Simulasi Hidro-Oseanografi dan Interaksi Air-Struktur",
      description: "Pemodelan Hidrodinamika menggunakan MIKE 21",
      image: image3,
    },
    {
      title: "Sub Lab Simulasi Hidro-Oseanografi dan Interaksi Air-Struktur",
      subtitle: "Sub Lab Simulasi Hidro-Oseanografi dan Interaksi Air-Struktur",
      description: "Pemodelan Hidrodinamika menggunakan Flow 3D",
      image: image4,
    },
    {
      title: "Sub Lab Mekanika Tanah dan Akuisisi Data Lapangan Pesisir",
      subtitle: "Sub Lab Mekanika Tanah dan Akuisisi Data Lapangan Pesisir",
      description: "Pemetikan Data Kekuatan Struktur di Lapangan",
      image: image5,
    },
  ];

  return (
    <section className="bg-light py-5">
      <div className="container">
        <div className="text-center mb-5">
           <h2 className="fw-bold mb-2 text-black">Layanan Laboratorium</h2>
          <p className="lead text-muted">
            Temukan layanan yang dapat membantu penelitian dan proyek Anda di bidang pesisir dan rekayasa pantai.
          </p>
        </div>
        
        <div className="row g-4 justify-content-center">
          {services.map((service, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-2">
              <div className="card h-100 shadow-sm rounded-3">
                <img src={service.image} className="card-img-top img-fluid" alt={service.title} />
                <div className="card-body d-flex flex-column text-center">
                  <h6 className="card-subtitle mb-2 text-muted small">{service.subtitle}</h6>
                  <h5 className="card-title fw-bold">{service.description}</h5>
                  <a href="#" className="btn mt-auto selengkapnya-btn">Selengkapnya</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <button className="btn btn-lg more-info-btn rounded-3">More Information</button>
        </div>
      </div>

      <style jsx>{`
        .card {
          border: none;
        }
        .selengkapnya-btn {
          background-color: #A8A196;
          color: white;
          border: none;
        }
        .selengkapnya-btn:hover {
          background-color: #8C847A;
        }
        .more-info-btn {
          background-color: #8E1616;
          color: white;
          font-weight: bold;
        }
        .more-info-btn:hover {
          background-color: #730303;
        }
      `}</style>
    </section>
  );
};

export default LayananSection;