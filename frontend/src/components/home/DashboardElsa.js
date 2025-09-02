import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const DashboardElsa = () => {
  return (
    <section className="dashboard-section py-5">
      <div className="container">
        <div className="text-center mb-5">
           <h2 className="fw-bold mb-2 text-black">
            Pencapaian <span style={{ color: "#E34D7A" }}>ELSA</span>
          </h2>
          <p className="lead text-muted col-lg-8 mx-auto">
            Keberhasilan platform e-Layanan Sains (ELSA) dalam mengintegrasikan seluruh layanan riset BRIN, yang bertujuan mempermudah akses, meningkatkan transparansi, efisiensi, dan akurasi proses layanan riset bagi peneliti, akademisi, serta industri.
          </p>
        </div>

        {/* Dashboard Content */}
        <div className="card shadow-sm rounded-3">
          <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center">
            <h5 className="mb-0">
              CAPAIAN ELSA - LABORATORIUM DINAMIKA PESISIR DAN REKAYASA PANTAI
            </h5>
            <div className="date-filter">
              <input type="date" className="form-control" defaultValue="2025-01-01" />
              <span className="text-white mx-2">-</span>
              <input type="date" className="form-control" defaultValue="2025-08-28" />
            </div>
          </div>
          <div className="card-body">
            <div className="row g-4">
              {/* Left Column: Bar Chart */}
              <div className="col-md-7">
                <div className="chart-container">
                  {/* Placeholder for Bar Chart */}
                  <h6 className="text-center mb-3">NOMINAL LAYANAN</h6>
                  <div className="placeholder-chart" style={{ height: '300px' }}>
                    <p className="text-center text-muted">Bar Chart will be rendered here</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Pie Chart */}
              <div className="col-md-5">
                <div className="chart-container">
                  {/* Placeholder for Pie Chart */}
                  <h6 className="text-center mb-3">PROSENTASE</h6>
                  <div className="placeholder-chart" style={{ height: '300px' }}>
                    <p className="text-center text-muted">Pie Chart will be rendered here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Metric Cards */}
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="metric-card p-4 text-center rounded-3">
              <h4 className="metric-title">Jumlah Layanan</h4>
              <h2 className="metric-value fw-bold">34,0</h2>
            </div>
          </div>
          <div className="col-md-4">
            <div className="metric-card p-4 text-center rounded-3">
              <h4 className="metric-title">Nominal Layanan</h4>
              <h2 className="metric-value fw-bold">312,3 jt</h2>
            </div>
          </div>
          <div className="col-md-4">
            <div className="metric-card p-4 text-center rounded-3">
              <h4 className="metric-title">Durasi Layanan</h4>
              <h2 className="metric-value fw-bold">1,0 rb</h2>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .dashboard-section {
          background-color: #F8F9FA;
        }
        .card-header {
          background-color: #7A0A0A !important;
        }
        .metric-card {
          background-color: #8E1616;
          color: white;
        }
      `}</style>
    </section>
  );
};

export default DashboardElsa;