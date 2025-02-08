import React, { useState } from "react";
import "../styles/App.css";

export default function ImageSelector({ images, onImageSelect }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (index) => {
    setSelectedImage(index);
    onImageSelect(images[index].video); // Передаем видео при клике
  };

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
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
    </div>
  );
}
