import React from "react";
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

function App() {
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

export default App;

