import React, { useState } from "react";
import "../styles/App.css";
import "../styles/media.css";
import ImageSelector from "./imageSelector";
import mediaData from "./imagesData";

export default function Hero() {
  const [videoSrc, setVideoSrc] = useState(mediaData[0]?.video || null);

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="left-content">
          <h1 className="title">
            <span className="title-span1">AI Cartoon</span>
            <span className="title-span2"> Generator</span>
          </h1>
          <p className="hero-about">
            Renderforest's AI Cartoon Generator lets you transform your creative
            ideas into cartoons in no time. Our AI-driven platform simplifies
            the animation process, allowing you to bring your vision to life
            with ease and precision.
          </p>
          <div className="hero-form">
            <div className="hero-search">
              <input
                type="text"
                placeholder="Describe your video topic"
                className="hero-form-input"
              />
              <button className="hero-button desktop-button">
                <span>Create AI Cartoon</span>
              </button>
            </div>
            <button className="hero-button mobile-button">
              <span>Create AI Cartoon</span>
            </button>
          </div>
        </div>
        <div className="right-content">
          <ImageSelector images={mediaData} onImageSelect={setVideoSrc} />
          <div className="video-container">
            <h3>Find Your Cartoon Character</h3>
            <div className="video">
              <video src={videoSrc} autoPlay loop muted playsInline />
            </div>
            <a href="https://www.renderforest.com/project/ai-video">
              Create AI Cartoon
            </a>
          </div>
        </div>
      </div>
      <section className="trusted">
        <div className="trusted-wrapper">
          <p>
            <span>AI Cartoon Maker </span>
            Trusted by
            <span> Our Partners</span>
          </p>
        </div>
        <div className="trusted-images">
          <img
            src="https://www.renderforest.com/landing-assets/_next/image?url=https%3A%2F%2Fstatic.rfstat.com%2Frenderforest%2Fimages%2Fv2%2Flanding-pics%2Fstanford-logo.webp&w=256&q=75"
            alt="Stanford"
            loading="lazy"
          />
          <img
            src="https://www.renderforest.com/landing-assets/_next/image?url=https%3A%2F%2Fstatic.rfstat.com%2Frenderforest%2Fimages%2Fv2%2Flanding-pics%2Fmeta-logo.webp&w=256&q=75"
            alt="Meta"
            loading="lazy"
          />
          <img
            src="https://www.renderforest.com/landing-assets/_next/image?url=https%3A%2F%2Fstatic.rfstat.com%2Frenderforest%2Fimages%2Fv2%2Flanding-pics%2Fbooking-logo.webp&w=256&q=75"
            alt="Booking"
            loading="lazy"
          />
          <img
            src="https://www.renderforest.com/landing-assets/_next/image?url=https%3A%2F%2Fstatic.rfstat.com%2Frenderforest%2Fimages%2Fv2%2Flanding-pics%2Fnike-logo.webp&w=128&q=75"
            alt="Nike"
            loading="lazy"
          />
          <img
            src="https://www.renderforest.com/landing-assets/_next/image?url=https%3A%2F%2Fstatic.rfstat.com%2Frenderforest%2Fimages%2Fv2%2Flanding-pics%2Fhootsuite-logo.webp&w=256&q=75"
            alt="Hootsuite"
            loading="lazy"
          />
        </div>
      </section>
    </section>
  );
}
