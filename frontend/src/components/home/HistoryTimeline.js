import React from "react";
import "../../Custom.css"; // Import file CSS kustom

const timelineData = [
  {
    year: "1982",
    description:
      "Laboratorium Teknik Pantai (LTP) didirikan oleh Dirjen Perhubungan Laut",
    type: "highlight",
  },
  {
    year: "1987",
    description:
      "Di Era BJ Habibie LTP dialihkan ke BPPT menjadi Laboratorium Pengkajian Teknik Pantai (LPTP)",
    type: "normal",
  },
  {
    year: "2001",
    description:
      "SK Ka BPPT 170/Kp/KA/BPT/IV/2006, LTP berubah menjadi Balai Pengkajian Dinamika Pantai (BPDP)",
    type: "highlight",
  },
  {
    year: "2015",
    description:
      "Perka BPPT no 25 Tahun 2015 berubah menjadi Balai Teknologi Infrastruktur Pelabuhan dan Dinamika Pantai (BTIPDP)",
    type: "normal",
  },
  {
    year: "2022",
    description:
      "Transformasi reorganisasi ke BRIN berganti menjadi Laboratorium Pantai dan Dinamika Pantai (LPDP)",
    type: "highlight",
  },
];

const HistoryTimeline = () => {
  return (
    <section className="bg-light py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-5 sejarah-title">Sejarah</h2>

        <div className="timeline d-flex justify-content-between align-items-center position-relative">
          {/* Garis horizontal putus-putus */}
          <div className="timeline-line position-absolute top-50 start-0 w-100"></div>

          {timelineData.map((item, idx) => (
            <div
              key={idx}
              className={`timeline-item text-center position-relative ${
                idx % 2 === 0 ? "top" : "bottom"
              }`}
              style={{ flexBasis: "18%" }}
            >
              {/* Kotak */}
              <div
                className={`p-3 rounded shadow ${
                  item.type === "highlight" ? "highlight-box" : "normal-box"
                }`}
              >
                <h5 className="fw-bold year-text">{item.year}</h5>
                <p className="mb-0 small">{item.description}</p>
              </div>

              {/* Titik lingkaran */}
              <div className="circle rounded-circle position-absolute start-50 translate-middle"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistoryTimeline;