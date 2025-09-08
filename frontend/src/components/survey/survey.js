import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./survey.css"; // We will create this file for custom styles
import Header from "../home/Header";
import Footer from "../home/Footer";

const Survey = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    institution: "",
    serviceType: "",
    otherService: "",
    easeOfAccess: 0,
    waitingTime: 0,
    staffProfessionalism: 0,
    serviceQuality: 0,
    infoClarity: 0,
    resultsAccess: 0,
    facilityComfort: 0,
    security: 0,
    overallSatisfaction: 0,
    futureHopes: "",
    improvementSuggestions: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRatingChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: parseInt(value, 10),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the formData to a backend server
    console.log("Form submitted with data:", formData);
    alert("Terima kasih atas masukan Anda!");
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      institution: "",
      serviceType: "",
      otherService: "",
      easeOfAccess: 0,
      waitingTime: 0,
      staffProfessionalism: 0,
      serviceQuality: 0,
      infoClarity: 0,
      resultsAccess: 0,
      facilityComfort: 0,
      security: 0,
      overallSatisfaction: 0,
      futureHopes: "",
      improvementSuggestions: "",
    });
  };

  return (
    <div className="bg-light survey-page">
      <Header />
      <div className="container py-5">
        <div className="text-center mb-5">
          <h1 className="fw-bold mb-3 text-dark">
            Reviu Layanan Laboratorium
          </h1>
          <p className="lead text-muted">
            Kami ingin mendengar pendapat dan masukan Anda agar kami dapat
            meningkatkan pelayanan kami!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-4 rounded-4 shadow-lg bg-white">
          {/* Required fields */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Nama<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email<span className="text-danger">*</span>
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="institution" className="form-label">
              Instansi / Unit Kerja<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="institution"
              name="institution"
              value={formData.institution}
              onChange={handleChange}
              required
            />
          </div>

          <hr className="my-5" />

          {/* Service Type */}
          <div className="mb-4">
            <h5 className="fw-bold mb-3">Jenis Layanan Yang Digunakan</h5>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="serviceType"
                id="service1"
                value="Fasilitas Uji Fisik - Saluran 2D Beton"
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="service1">
                Fasilitas Uji Fisik - Saluran 2D Beton
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="serviceType"
                id="service2"
                value="Fasilitas Uji Fisik - Saluran 2D Kaca"
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="service2">
                Fasilitas Uji Fisik - Saluran 2D Kaca
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="serviceType"
                id="service3"
                value="Fasilitas Uji Fisik - Kolam 3D"
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="service3">
                Fasilitas Uji Fisik - Kolam 3D
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="serviceType"
                id="service4"
                value="Fasilitas Uji Fisik - Saluran Simulasi Tsunami"
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="service4">
                Fasilitas Uji Fisik - Saluran Simulasi Tsunami
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="serviceType"
                id="service5"
                value="Fasilitas Uji Fisik - Penggunaan Data Primer"
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="service5">
                Fasilitas Uji Fisik - Penggunaan Data Primer
              </label>
            </div>
            <div className="form-check mt-2">
              <label className="form-check-label d-block" htmlFor="other">
                <input
                  className="form-check-input"
                  type="radio"
                  name="serviceType"
                  id="other"
                  value="Yang lain"
                  onChange={handleChange}
                />
                Yang lain:
                <input
                  type="text"
                  className="form-control mt-2"
                  name="otherService"
                  value={formData.otherService}
                  onChange={handleChange}
                  disabled={formData.serviceType !== "Yang lain"}
                  placeholder="Sebutkan layanan lainnya"
                />
              </label>
            </div>
          </div>

          <hr className="my-5" />

          {/* Rating Questions */}
          {[
            { id: 1, label: "Kemudahan dalam mengakses layanan", name: "easeOfAccess" },
            { id: 2, label: "Waktu tunggu layanan", name: "waitingTime" },
            { id: 3, label: "Profesionalisme staf laboratorium", name: "staffProfessionalism" },
            { id: 4, label: "Kualitas hasil layanan", name: "serviceQuality" },
            { id: 5, label: "Kejelasan informasi yang diberikan", name: "infoClarity" },
            { id: 6, label: "Kemudahan dalam mengakses hasil", name: "resultsAccess" },
            { id: 7, label: "Tingkat kebersihan dan kenyamanan fasilitas", name: "facilityComfort" },
            { id: 8, label: "Tingkat keamanan dalam pelayanan", name: "security" },
            { id: 9, label: "Kepuasan terhadap keseluruhan layanan", name: "overallSatisfaction" },
          ].map((item) => (
            <div className="mb-4" key={item.id}>
              <h6 className="fw-bold mb-3">{item.id}. {item.label}</h6>
              <div className="rating-container">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <label key={rating} className="rating-label me-3">
                    <input
                      type="radio"
                      className="rating-input"
                      name={item.name}
                      value={rating}
                      onChange={handleRatingChange}
                      checked={formData[item.name] === rating}
                      required
                    />
                    <span className="rating-value">{rating}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}

          <hr className="my-5" />

          {/* Open-ended Questions */}
          <div className="mb-4">
            <label htmlFor="futureHopes" className="form-label fw-bold">
              Apakah harapan untuk layanan kedepan?
            </label>
            <textarea
              className="form-control"
              id="futureHopes"
              name="futureHopes"
              rows="3"
              value={formData.futureHopes}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="improvementSuggestions" className="form-label fw-bold">
              Apakah ada usulan perbaikan atau tambahan layanan?
            </label>
            <textarea
              className="form-control"
              id="improvementSuggestions"
              name="improvementSuggestions"
              rows="3"
              value={formData.improvementSuggestions}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="d-grid mt-5">
            <button type="submit" className="btn btn-primary btn-lg fw-bold submit-btn">
              Kirim Reviu
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Survey;