import React from "react";
import "../styles/moreSection.css";
const MoreSection = () => {
  return (
    <section className="more-section">
      <div className="more-container">
        <h2>Discover More from Renderforest</h2>
        <div className="more-items">
          <div className="more-item">
            <a href="ai-video-generator">
              <p>AI Video Generator</p>
            </a>
          </div>
          <div className="more-item">
            <a href="ai-video-generator">
              <p>Cartoon Maker</p>
            </a>
          </div>
          <div className="more-item">
            <a href="ai-video-generator">
              <p>AI Business Name Generator</p>
            </a>
          </div>
          <div className="more-item">
            <a href="ai-video-generator">
              <p>AI Website Builder</p>
            </a>
          </div>
          <div className="more-item">
            <a href="ai-video-generator">
              <p>AI Logo Maker</p>
            </a>
          </div>
          <div className="more-item">
            <a href="ai-video-generator">
              <p>Video Maker</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MoreSection;
