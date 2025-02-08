import React, { useState, useEffect } from "react";
import "../styles/App.css";

export default function ImageSelector({ images, onImageSelect }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState(images[0].video);

  const handleClick = (index) => {
    setSelectedImage(index);
    setSelectedVideo(images[index].video);
    onImageSelect(images[index].video);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (selectedImage + 1) % images.length;
      setSelectedImage(nextIndex);
      setSelectedVideo(images[nextIndex].video);
      onImageSelect(images[nextIndex].video);
    }, 5000);
    return () => clearInterval(interval);
  }, [selectedImage, images, onImageSelect]);

  return (
    <div className="rollin-images-div">
      <p>Style</p>
      <div className="hero-rounds"></div>
      {images.map((image, index) => (
        <div
          key={index}
          className={`image-wrapper ${
            selectedImage === index ? "styles_selected__IcR_W" : ""
          }`}
          onClick={() => handleClick(index)}
        >
          <img
            src={image.src}
            alt={image.alt}
            style={{
              border: selectedImage === index ? "2px solid #a0b8c0" : "none",
              padding: selectedImage === index ? "2px" : "0",
            }}
          />
        </div>
      ))}
    </div>
  );
}
