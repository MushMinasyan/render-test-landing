import React from "react";
import "../styles/App.css";

export default function Hero() {
  const images = [
    {
      src: "https://www.renderforest.com/landing-assets/_next/image?url=https%3A%2F%2Fstatic.rfstat.com%2Frenderforest%2Fimages%2Fv2%2Flanding-pics%2Fai-cartoon-generator%2Favatar-1.avif&w=64&q=75",
      alt: "Avatar 1",
    },
    {
      src: "https://www.renderforest.com/landing-assets/_next/image?url=https%3A%2F%2Fstatic.rfstat.com%2Frenderforest%2Fimages%2Fv2%2Flanding-pics%2Fai-cartoon-generator%2Favatar-2.avif&w=64&q=75",
      alt: "Avatar 2",
    },
    {
      src: "https://www.renderforest.com/landing-assets/_next/image?url=https%3A%2F%2Fstatic.rfstat.com%2Frenderforest%2Fimages%2Fv2%2Flanding-pics%2Fai-cartoon-generator%2Favatar-3.avif&w=64&q=75",
      alt: "Avatar 3",
    },
    {
      src: "https://www.renderforest.com/landing-assets/_next/image?url=https%3A%2F%2Fstatic.rfstat.com%2Frenderforest%2Fimages%2Fv2%2Flanding-pics%2Fai-cartoon-generator%2Favatar-4-new.avif&w=64&q=75",
      alt: "Avatar 4",
    },
    {
      src: "https://www.renderforest.com/landing-assets/_next/image?url=https%3A%2F%2Fstatic.rfstat.com%2Frenderforest%2Fimages%2Fv2%2Flanding-pics%2Fai-cartoon-generator%2Favatar-5.avif&w=64&q=75",
      alt: "Avatar 5",
    },
    {
      src: "https://www.renderforest.com/landing-assets/_next/image?url=https%3A%2F%2Fstatic.rfstat.com%2Frenderforest%2Fimages%2Fv2%2Flanding-pics%2Fai-cartoon-generator%2Favatar-6.avif&w=64&q=75",
      alt: "Avatar 6",
    },
    {
      src: "https://www.renderforest.com/landing-assets/_next/image?url=https%3A%2F%2Fstatic.rfstat.com%2Frenderforest%2Fimages%2Fv2%2Flanding-pics%2Fai-cartoon-generator%2Favatar-7.avif&w=64&q=75",
      alt: "Avatar 7",
    },
    {
      src: "https://www.renderforest.com/landing-assets/_next/image?url=https%3A%2F%2Fstatic.rfstat.com%2Frenderforest%2Fimages%2Fv2%2Flanding-pics%2Fai-cartoon-generator%2Favatar-8.avif&w=64&q=75",
      alt: "Avatar 8",
    },
  ];

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
              {" "}
              <span>Create AI Cartoon </span>
            </button>
          </div>
        </div>
      </div>
      <div className="right-content">
        <div className="rollin-images-div">
          <p>Style</p>
          <div className="hero-rounds"></div>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
        <div className="video-container">
          <h3>Find Your Cartoon Character</h3>
          <div>
            <video
              src="https://videostatic.rfstat.com/landing/single-landing/cartoon-hero-video-8-1.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          <a href="https://www.renderforest.com/project/ai-video">
            {" "}
            Create AI Cartoon
          </a>
        </div>
      </div>
      <section className="trusted"></section>
    </div>
  );
}
