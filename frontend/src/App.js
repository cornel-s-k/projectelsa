import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Halaman Utama
import Header from "./components/home/Header";
import Herosection from "./components/home/Herosection";
import HistoryTimeline from "./components/home/HistoryTimeline";
import Tugas from "./components/home/Tugas";
import TaglineSection from "./components/home/TaglineSection";
import FasilitasSection from "./components/home/FasilitasSection";
import VideoSection from "./components/home/VideoSection";
import LayananSection from "./components/home/LayananSection";
import TestimoniSection from "./components/home/TestimoniSection";
import DashboardElsa from "./components/home/DashboardElsa";
import SDMLaboratorium from "./components/home/SDMLaboratorium";
import HKPSection from "./components/home/HKPSection";
import MitraKerjasama from "./components/home/MitraKerjasama";
import Footer from "./components/home/Footer";
import TimelineLayanan from "./components/home/TimelineLayanan";

// Halaman About
import About from "./components/about/about";

// Halaman Fasilitas Detail
import FasilitasDetail1 from "./components/fasilitas/FasilitasDetail1";
import FasilitasDetail2 from "./components/fasilitas/FasilitasDetail2";
import FasilitasDetail3 from "./components/fasilitas/FasilitasDetail3";
import HKPLMFDP from "./components/hkp/HKPLMFDP";
import HKPLSHIAS from "./components/hkp/HKPLSHIAS";
import HKPLMTADLP from "./components/hkp/HKPLMTADLP";
import FAQ from "./components/faq/FAQ";

// 🔹 Halaman utama (HomePage)
function HomePage() {
  return (
    <div className="bg-white text-gray-800 font-sans antialiased">
      <Header />
      <main>
        <Herosection />
        <HistoryTimeline />
        <Tugas />
        <TaglineSection />
        <FasilitasSection />
        <VideoSection />
        <LayananSection />
        <TimelineLayanan />
        <DashboardElsa />
        <SDMLaboratorium />
        <HKPSection />
        <TestimoniSection />
        <MitraKerjasama />
      </main>
      <Footer />
    </div>
  );
}

// 🔹 Router utama (App)
function App() {
  return (
    <Router>
      <Routes>
        {/* Halaman utama */}
        <Route path="/" element={<HomePage />} />

        {/* Halaman About */}
        <Route path="/about" element={<About />} />
        
        {/* Hapus rute ini karena sudah dihandle dengan tag <a> di Header */}
        {/* <Route path="/#fasilitas-section" element={<FasilitasSection />} /> */}

        {/* Hapus rute ini karena sudah dihandle dengan tag <a> di Header */}
        {/* <Route path="/#hkp-section" element={<HKPSection />} /> */}

        {/* PERBAIKI RUTE INI: Hapus tanda pagar (#) */}
        <Route path="/faq" element={<FAQ />} />

        {/* Halaman Detail Fasilitas */}
        <Route path="/fasilitas/1" element={<FasilitasDetail1 />} />
        <Route path="/fasilitas/2" element={<FasilitasDetail2 />} />
        <Route path="/fasilitas/3" element={<FasilitasDetail3 />} />

        {/* Halaman Detail HKP */}
        <Route path="/hkp/HKPL-MFDP" element={<HKPLMFDP />} />
        <Route path="/hkp/HKPL-SHIAS" element={<HKPLSHIAS/>} />
        <Route path="/hkp/HKPL-MTADLP" element={< HKPLMTADLP />} />
      </Routes>
    </Router>
  );
}

export default App;