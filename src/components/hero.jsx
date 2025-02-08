import React, { useState } from "react";
import "../styles/App.css";
import ImageSelector from "./imageSelector";
import media from "./imagesData"; // Импортируем массив с изображениями и видео

export default function Hero() {
  const [videoSrc, setVideoSrc] = useState(media[0].video); // Начальное видео

  return (
    <div className="hero-container">
      <div className="left-content">
        <h1 className="title">
          <span className="title-span1">AI Cartoon</span>
          <span className="title-span2"> Generator</span>
        </h1>
        <p className="hero-about">
          Renderforest's AI Cartoon Generator lets you transform your creative
          ideas into cartoons in no time. Our AI-driven platform simplifies the
          animation process, allowing you to bring your vision to life with ease
          and precision.
        </p>
        <div className="hero-form">
          <div className="hero-search">
            <input
              type="text"
              placeholder="Describe your video topic"
              className="hero-form-input"
            />
            <button className="hero-button">
              <span>Create AI Cartoon</span>
            </button>
          </div>
        </div>
      </div>
      <div className="right-content">
        <ImageSelector images={media} onImageSelect={setVideoSrc} />
        <div className="video-container">
          <h3>Find Your Cartoon Character</h3>
          <div>
            <video
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              key={videoSrc} // Обновляем видео при изменении src
            />
          </div>
          <a href="https://www.renderforest.com/project/ai-video">
            Create AI Cartoon
          </a>
        </div>
      </div>
      <section className="trusted"></section>
    </div>
  );
}
