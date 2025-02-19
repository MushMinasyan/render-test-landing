import React from "react";
import "../styles/character-section.css";

const charactersData = [
  {
    id: 1,
    title: "Factory of 3D Animations",
    img: "https://www.renderforest.com/landing-assets/_next/image?url=https%3A%2F%2Fcdn.renderforest.com%2Fvideo-maker%2Ftemplates%2Fthumbnails%2F2416%2Fwide-046d6f91-1e51-4525-8f24-fc3d74f60176_2x.webp&w=384&q=75",
    video:
      "https://videostatic.rfstat.com/landing/single-landing/factory-of-3d-animations.mp4",
    link: "https://www.renderforest.com/template/factory-of-3d-animations",
  },
  {
    id: 2,
    title: "3D Explainer Video Toolkit",
    img: "https://www.renderforest.com/landing-assets/_next/image?url=https%3A%2F%2Fcdn.renderforest.com%2Fvideo-maker%2Ftemplates%2Fthumbnails%2F1021%2Fthumbnail_16_9_2x.webp&w=384&q=75",
    video:
      "https://videostatic.rfstat.com/landing/single-landing/3d-explainer-video-toolkit.mp4",
    link: "https://www.renderforest.com/template/3d-explainer-video-toolkit",
  },
  {
    id: 3,
    title: "Whiteboard Animation Toolkit",
    img: "https://www.renderforest.com/landing-assets/_next/image?url=https%3A%2F%2Fcdn.renderforest.com%2Fvideo-maker%2Ftemplates%2Fthumbnails%2F1011%2Fthumbnail_16_9_2x.webp&w=384&q=75",
    video:
      " https://videostatic.rfstat.com/landing/single-landing/whiteboard-animation-toolkit.mp4",
    link: "https://www.renderforest.com/template/whiteboard-animation-toolkit",
  },
  {
    id: 4,
    title: "Trendy Explainer Toolkit",
    img: "https://www.renderforest.com/landing-assets/_next/image?url=https%3A%2F%2Fcdn.renderforest.com%2Fvideo-maker%2Ftemplates%2Fthumbnails%2F1391%2Fwide-086fa058-d02e-4388-83ef-5d3e57e6e6f3_2x.webp&w=384&q=75",
    video:
      "https://videostatic.rfstat.com/landing/single-landing/whiteboard-animation-toolkit.mp4",
    link: "https://www.renderforest.com/template/trendy-explainer-toolkit",
  },
  {
    id: 5,
    title: "Mascot Stories Toolkit",
    img: "https://www.renderforest.com/landing-assets/_next/image?url=https%3A%2F%2Fcdn.renderforest.com%2Fvideo-maker%2Ftemplates%2Fthumbnails%2F1019%2Fthumbnail_16_9_2x.webp&w=384&q=75",
    video:
      "https://videostatic.rfstat.com/landing/single-landing/mascot-stories-toolkit.mp4",
    link: "https://www.renderforest.com/template/mascot-stories-toolkit",
  },
  {
    id: 6,
    title: "Delivery and Logistics Explainer Kit",
    img: "https://www.renderforest.com/landing-assets/_next/image?url=https%3A%2F%2Fcdn.renderforest.com%2Fvideo-maker%2Ftemplates%2Fthumbnails%2F3031%2Fwide-17630a91-6ec2-4b9d-8867-e4c459b2fbd3_2x.webp&w=384&q=75",
    video:
      "https://videostatic.rfstat.com/thumbnail/3031/wide-27c43256-df96-42c1-aace-262f086fb411.mp4",
    link: "https://www.renderforest.com/template/delivery-logistics-explainer-kit",
  },
];

const CharactersSection = () => {
  return (
    <div className="character-section">
      <div className="characters-container">
        <h2>
          Explore a Wide Range of <span>Cartoon Characters</span>
        </h2>
        <p>
          Renderforest’s AI Cartoon Generator offers a collection of cartoon
          characters to make your stories more unique. You can choose from
          different styles and personalities to fit your narrative and brand
          aesthetics. From the quirky protagonist to the clever antagonist, our
          character library has them all.
        </p>
        <div className="characters-list">
          {charactersData.map((character) => (
            <a
              key={character.id}
              href={character.link}
              className="character-item"
            >
              <div className="characters-image-container">
                <img
                  src={character.img}
                  alt={character.title}
                  className="character-img"
                  loading="lazy"
                />
                <video
                  src={character.video}
                  className="character-video"
                  autoPlay
                  loop
                  muted
                  loading="lazy"
                />
              </div>
              <p className="character-item-title">{character.title}</p>
            </a>
          ))}
        </div>
        <a
          className="link-primary-button"
          href="https://www.renderforest.com/project/ai-video"
        >
          Create AI Cartoons
        </a>
      </div>
    </div>
  );
};

export default CharactersSection;
