import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'; // Tambahkan impor Link
import "../../Custom.css";

const Timeline = () => {
  const [timelineData, setTimelineData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const urls = [
          "https://docs.google.com/spreadsheets/d/1Qd48JRtXwDLpVOslqf8CeCOliZ5XllxA5m0bdt8kCK8/export?format=csv&gid=0",
          "https://docs.google.com/spreadsheets/d/1Qd48JRtXwDLpVOslqf8CeCOliZ5XllxA5m0bdt8kCK8/export?format=csv&gid=1706173216", 
          "https://docs.google.com/spreadsheets/d/1Qd48JRtXwDLpVOslqf8CeCOliZ5XllxA5m0bdt8kCK8/export?format=csv&gid=107033274"
        ];

        const responses = await Promise.all(urls.map(url => axios.get(url)));

        const processCsvData = (csvText) => {
          if (!csvText || csvText.trim() === '') {
            return [];
          }
          const lines = csvText.trim().split('\n');
          // Handle cases where the sheet is empty or contains only headers
          if (lines.length <= 1) {
              return [];
          }
          const headers = lines[0].split(',').map(header => header.trim());
          const data = lines.slice(1).map(line => {
            const values = line.split(',');
            // Tambahkan validasi yang lebih ketat untuk baris yang tidak relevan
            if (values.length !== headers.length || line.trim() === '') {
              console.warn(`Melewati baris tidak valid: "${line}"`);
              return null;
            }
            return headers.reduce((obj, header, index) => {
              const value = values[index] ? values[index].trim() : '';
              obj[header] = value;
              return obj;
            }, {});
          }).filter(Boolean);
          return data;
        };

        const allData = responses.flatMap(response => processCsvData(response.data));

        setTimelineData(allData);

      } catch (err) {
        console.error("Gagal mengambil data:", err);
        setError("Gagal memuat data. Silakan coba lagi.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div className="container text-center py-5">Memuat data...</div>;
  }
  if (error) {
    return <div className="container text-center py-5">{error}</div>;
  }

  return (
    <div className="container text-center py-5">
      <h1 className="display-4">Timeline Proyek</h1>
      <p className="lead">Data diambil dari tiga sheet spreadsheet.</p>

      <div className="timeline-container my-4">
        {timelineData.length > 0 ? (
          timelineData.map((item, index) => (
            <div key={index} className="timeline-item">
              <h3>{item.judul || "Tidak ada judul"}</h3>
              <p>{item.deskripsi || "Tidak ada deskripsi"}</p>
              <p><strong>Tanggal:</strong> {item.tanggal || "Tidak ada tanggal"}</p>
            </div>
          ))
        ) : (
          <p>Tidak ada data timeline untuk ditampilkan.</p>
        )}
      </div>

      <Link to="/" className="btn btn-primary mt-3">Kembali ke Beranda</Link>
    </div>
  );
};

export default Timeline;