import React from "react";

const partners = [
  { logo: "https://via.placeholder.com/150", name: "Mitra 1" },
  { logo: "https://via.placeholder.com/150", name: "Mitra 2" },
  { logo: "https://via.placeholder.com/150", name: "Mitra 3" },
  { logo: "https://via.placeholder.com/150", name: "Mitra 4" },
  { logo: "https://via.placeholder.com/150", name: "Mitra 5" },
  { logo: "https://via.placeholder.com/150", name: "Mitra 6" },
  { logo: "https://via.placeholder.com/150", name: "Mitra 7" },
  { logo: "https://via.placeholder.com/150", name: "Mitra 8" },
  { logo: "https://via.placeholder.com/150", name: "Mitra 9" },
  { logo: "https://via.placeholder.com/150", name: "Mitra 10" },
];

const MitraKerjasama = () => {
  return (
    <section className="py-5 text-center">
      <div className="container">
        <h2 className="fw-bold mb-4 text-dark"> Mitra Kerjasama</h2>
        <div className="row g-4">
          {partners.map((partner, idx) => (
            <div className="col-6 col-md-3 col-lg-2" key={idx}>
              <img
                src={partner.logo}
                alt={partner.name}
                className="img-fluid"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MitraKerjasama;
