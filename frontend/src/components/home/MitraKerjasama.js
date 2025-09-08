import React from "react";

const partners = [
  { logo: "https://integrasi.djpt.kkp.go.id/pud/assets/portal/img/material-logo-2021.png", name: "Mitra 1" },
  { logo: "https://www.sig.id/storage/downloads/logo-sig/sig-latar-putih.png", name: "Mitra 2" },
  { logo: "https://portal.dephub.go.id/themes/new2020/assets/images/logo-large.png", name: "Mitra 3" },
  { logo: "https://mm.feb.undip.ac.id/wp-content/uploads/2021/11/universitas-diponegoro-logo.png", name: "Mitra 4" },
  { logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXG2TNiJkWQFvLsMJOUvVKs6EazGyhcLuhOQ&s", name: "Mitra 5" },
];

const MitraKerjasama = () => {
  return (
    <section className="py-5 text-center bg-light">
      <style>{`
        .slider {
          overflow: hidden;
          position: relative;
          width: 100%;
        }
        .slider-track {
          display: flex;
          width: calc(200%);
          animation: scroll 25s linear infinite;
        }
        .slide {
          flex: 0 0 auto;
          width: 150px;
          margin: 0 20px;
        }
        .slide img {
          max-width: 100%;
          height: auto;
          transition: transform 0.3s;
        }
        .slide img:hover {
          transform: scale(1.1);
        }
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

      <div className="container">
        <h2 className="fw-bold mb-4 text-dark">Mitra Kerjasama</h2>
        <div className="slider">
          <div className="slider-track">
            {partners.concat(partners).map((partner, idx) => (
              <div className="slide" key={idx}>
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="img-fluid"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MitraKerjasama;

