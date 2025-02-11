import React from "react";
import "../styles/advantages-section.css";
const advantages = [
  {
    id: 1,
    image:
      "https://www.renderforest.com/landing-assets/_next/image?url=https%3A%2F%2Fstatic.rfstat.com%2Frenderforest%2Fimages%2Fv2%2Flanding-pics%2Fai-cartoon-generator%2Fadvantages-1-new.avif&w=96&q=75",
    title: "Time-Efficient Video Creation",
    text: "Produce high-quality cartoons while saving time and effort. Our AI Cartoon Generator automates the animation process so you can create professional animations in a fraction of the time compared to traditional methods. This way, you focus on your creative vision while leaving the heavy lifting to our AI.",
  },
  {
    id: 2,
    image:
      "https://www.renderforest.com/landing-assets/_next/image?url=https%3A%2F%2Fstatic.rfstat.com%2Frenderforest%2Fimages%2Fv2%2Flanding-pics%2Fai-cartoon-generator%2Fadvantages-2-new.avif&w=96&q=75",
    title: "User-Friendly Interface",
    text: "Our platform is easy to navigate, even if you’re a beginner. Our AI cartoon maker offers intuitive tools that streamline the whole cartoon creation process. This approach allows anyone, regardless of their expertise, to create stunning animations with little effort.",
  },
  {
    id: 3,
    image:
      "https://www.renderforest.com/landing-assets/_next/image?url=https%3A%2F%2Fstatic.rfstat.com%2Frenderforest%2Fimages%2Fv2%2Flanding-pics%2Fai-cartoon-generator%2Fadvantages-3-new.avif&w=96&q=75",
    title: "Customizable Cartoon Templates",
    text: "Renderforest AI cartoon creator templates are fully editable so you can adjust elements to perfectly match your vision. This flexibility ensures that your animations are unique and stand out from the crowd, providing a personal touch that generic templates can’t offer.",
  },
  {
    id: 4,
    image:
      "https://www.renderforest.com/landing-assets/_next/image?url=https%3A%2F%2Fstatic.rfstat.com%2Frenderforest%2Fimages%2Fv2%2Flanding-pics%2Fai-cartoon-generator%2Fadvantages-4-new.avif&w=96&q=75",
    title: "Cost-Effective Solution",
    text: "Achieve professional results with ease. Our AI cartoon video maker delivers high-quality animation capabilities without the costs of hiring professional animators or investing in expensive software. Maximize your budget without compromising on quality.",
  },
  {
    id: 5,
    image:
      "https://www.renderforest.com/landing-assets/_next/image?url=https%3A%2F%2Fstatic.rfstat.com%2Frenderforest%2Fimages%2Fv2%2Flanding-pics%2Fai-cartoon-generator%2Fadvantages-5-new.avif&w=96&q=75",
    title: "Continuous Updates and Improvements",
    text: "We regularly update our AI cartoon maker platform with the latest tools, templates, and innovations in AI animation technology. Our dedication guarantees that you always have access to innovative features, keeping your animations fresh and modern.",
  },
];

const AdvantagesSection = () => {
  return (
    <section className="advantages-section">
      <div className="advantages-container">
        <h2>
          Top Reasons to Choose Our <span> AI Cartoon Generator</span>
        </h2>
        <div className="advantages-lists">
          {advantages.map((advantage) => (
            <div className="case-box" key={advantage.id}>
              <div className="case-image">
                <img src={advantage.image} alt={advantage.title} />
              </div>
              <div className="case-text">
                <h3>{advantage.title}</h3>
                <p>{advantage.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
