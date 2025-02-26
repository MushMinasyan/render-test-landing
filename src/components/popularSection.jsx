import React from "react";
import "../styles/popular-section.css";
const popularData = [
  {
    id: 1,
    icon: "https://www.renderforest.com/landing-assets/_next/image?url=https%3A%2F%2Fstatic.rfstat.com%2Frenderforest%2Fimages%2Fv2%2Flanding-pics%2Fai-cartoon-generator%2Fperson.avif&w=96&q=75",
    number: "25 Million",
    text: "Clients Served",
  },
  {
    id: 2,
    icon: "https://www.renderforest.com/landing-assets/_next/image?url=https%3A%2F%2Fstatic.rfstat.com%2Frenderforest%2Fimages%2Fv2%2Flanding-pics%2Fai-cartoon-generator%2Fcursor.avif&w=96&q=75",
    number: "50 Million",
    text: "Projects Created",
  },
  {
    id: 3,
    icon: "https://www.renderforest.com/landing-assets/_next/image?url=https%3A%2F%2Fstatic.rfstat.com%2Frenderforest%2Fimages%2Fv2%2Flanding-pics%2Fai-cartoon-generator%2Fstar.avif&w=96&q=75",
    number: "5000+",
    text: "Positive Reviews",
  },
];

export default function PopularSection() {
  return (
    <section className="popular-section">
      <div className="popular-container">
        <h2>
          Renderforest’s <span>AI Cartoon Maker</span> by the Numbers
        </h2>
        <div className="popular-cards">
          {popularData.map((item) => (
            <div
              key={item.id}
              className={`popular-card popular-card${item.id}`}
            >
              <div className={`icon-box icon-box${item.id}`}>
                <img alt="icon" src={item.icon} />
              </div>
              <h3 className="popular-card-h3">{item.number}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
