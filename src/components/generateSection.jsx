import React from "react";
import "../styles/generate-section.css";
const data = [
  {
    title: "AI-Powered Prompt-to-Cartoon Conversion",
    description:
      "Instantly transform written prompts into animated cartoons with our advanced AI algorithms. This allows you to quickly visualize your ideas without the need for animation experience, making the creation process accessible and efficient.",
    imgUrl:
      "https://www.renderforest.com/landing-assets/_next/image?url=https%3A%2F%2Fstatic.rfstat.com%2Frenderforest%2Fimages%2Fv2%2Flanding-pics%2Fai-cartoon-generator%2Fgenerate-video-text-image-1-new-new.avif&w=640&q=75",
    className: "generate-box1 generate-box",
  },
  {
    title: "Pre-Designed Templates",
    description:
      "Choose from a collection of pre-designed templates to start your cartoon creation. Our templates are crafted by professional designers and cover various themes and styles, providing a solid foundation for your animations and saving you time.",
    imgUrl:
      "https://www.renderforest.com/landing-assets/_next/image?url=https%3A%2F%2Fstatic.rfstat.com%2Frenderforest%2Fimages%2Fv2%2Flanding-pics%2Fai-cartoon-generator%2Fgenerate-video-text-image-2.avif&w=640&q=75",
    className: "generate-box2 generate-box",
  },
  {
    title: "Voiceover Integration",
    description:
      "Add professional-sounding voiceovers to your cartoon with just a few clicks. Renderforest’s voiceover integration allows you to upload or record high-quality voiceovers that sync perfectly with your animations, boosting the overall production value.",
    imgUrl:
      "https://www.renderforest.com/landing-assets/_next/image?url=https%3A%2F%2Fstatic.rfstat.com%2Frenderforest%2Fimages%2Fv2%2Flanding-pics%2Fai-cartoon-generator%2Fgenerate-video-text-image-3.avif&w=640&q=75",
    className: "generate-box3 generate-box",
  },
  {
    title: "Extensive Music Library",
    description:
      "Access a huge collection of music tracks to make your animations more engaging and fun. Our music library includes various genres and moods so you can find the perfect soundtrack that complements your cartoon and resonates with your audience.",
    imgUrl:
      "https://www.renderforest.com/landing-assets/_next/image?url=https%3A%2F%2Fstatic.rfstat.com%2Frenderforest%2Fimages%2Fv2%2Flanding-pics%2Fai-cartoon-generator%2Fgenerate-video-text-image-4.avif&w=640&q=75",
    className: "generate-box4 generate-box",
  },
  {
    title: "Various Fonts",
    description:
      "Customize your cartoons with a variety of fonts to match your style. Our font library comes with options that you can use for various video elements, captions, and titles, adding a unique touch to your animations.",
    imgUrl:
      "https://www.renderforest.com/landing-assets/_next/image?url=https%3A%2F%2Fstatic.rfstat.com%2Frenderforest%2Fimages%2Fv2%2Flanding-pics%2Fai-cartoon-generator%2Fgenerate-video-text-image-5.avif&w=640&q=75",
    className: "generate-box5 generate-box",
  },
  {
    title: "Smooth Transitions",
    description:
      "Make sure that transitions between scenes are clean and flawless. You can use these transition effects and make your cartoon appear refined and visually attractive. At the same time, you can maintain the animation's flow—a functionality that’s key to producing high-quality output.",
    imgUrl:
      "https://www.renderforest.com/landing-assets/_next/image?url=https%3A%2F%2Fstatic.rfstat.com%2Frenderforest%2Fimages%2Fv2%2Flanding-pics%2Fai-cartoon-generator%2Fgenerate-video-text-image-6.avif&w=640&q=75",
    className: "generate-box6 generate-box",
  },
  {
    title: "Personal Watermark Integration",
    description:
      "Protect your creations by adding personal watermarks. Our watermark feature allows you to brand your cartoons with your logo or signature, guaranteeing that your work is recognized and protected from unauthorized use.",
    imgUrl:
      "https://www.renderforest.com/landing-assets/_next/image?url=https%3A%2F%2Fstatic.rfstat.com%2Frenderforest%2Fimages%2Fv2%2Flanding-pics%2Fai-cartoon-generator%2Fgenerate-video-text-image-7.avif&w=640&q=75",
    className: "generate-box7 generate-box",
  },
  {
    title: "Real-Time Preview and Editing",
    description:
      "Preview and edit your cartoon in real time for a flawless final product. Our editing feature lets you see changes as you make them, allowing for immediate feedback and adjustments. This speeds up the creation process and gives you the chance to make sure everything is as it should be.",
    imgUrl:
      "https://www.renderforest.com/landing-assets/_next/image?url=https%3A%2F%2Fstatic.rfstat.com%2Frenderforest%2Fimages%2Fv2%2Flanding-pics%2Fai-cartoon-generator%2Fgenerate-video-text-image-8.avif&w=640&q=75",
    className: "generate-box8 generate-box ",
  },
];

const GenerateSection = () => {
  return (
    <section className="generate-section">
      <div className="generate-container">
        <h2>
          Generate
          <span> Cartoons From Text </span>
          with AI
        </h2>
        <div className="generate-content">
          {data.map((item, index) => (
            <div key={index} className={item.className}>
              <div className="generate-text-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <div className="generate-image-content">
                <img src={item.imgUrl} alt="img" loading="lazy" />
              </div>
            </div>
          ))}
        </div>
        <a
          className="link-primary-button"
          href="https://www.renderforest.com/project/ai-video"
        >
          Create AI Cartoons
        </a>
      </div>
    </section>
  );
};

export default GenerateSection;
