import React from "react";
import "../styles/moreSection.css";
import MoreItem from "./moreItem"; // Импортируем компонент

const MoreSection = () => {
  const moreItems = [
    { text: "AI Video Generator", href: "ai-video-generator" },
    { text: "Cartoon Maker", href: "ai-video-generator" },
    { text: "AI Business Name Generator", href: "ai-video-generator" },
    { text: "AI Website Builder", href: "ai-video-generator" },
    { text: "AI Logo Maker", href: "ai-video-generator" },
    { text: "Video Maker", href: "ai-video-generator" },
  ];

  return (
    <section className="more-section">
      <div className="more-container">
        <h2>Discover More from Renderforest</h2>
        <div className="more-items">
          {moreItems.map((item, index) => (
            <MoreItem key={index} text={item.text} href={item.href} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreSection;
