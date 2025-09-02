import React from "react";
import videoBg from  "../../assets/home/profil.mp4"

const VideoSection = () => {
  return (
    <section className="video-section position-relative">
      <video
        className="video-background w-100"
        src={videoBg}
        poster="https://via.placeholder.com/800x400"
        autoPlay
        loop
        muted
        playsInline
      ></video>
    </section>
  );
};

export default VideoSection;
