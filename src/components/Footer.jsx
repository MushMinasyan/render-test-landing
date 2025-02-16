import React, { useState } from "react";
import "../styles/footer.css";

const sections = [
  {
    title: "Company",
    links: [
      { text: "About Us", href: "#" },
      { text: "Contact Us", href: "#" },
      { text: "Careers", href: "#" },
      { text: "Help and Support", href: "#" },
      { text: "Affiliate Program", href: "#" },
      { text: "Privacy Policy", href: "#" },
      { text: "Terms and Conditions", href: "#" },
      { text: "Sitemap", href: "#" },
      { text: "Partners Program", href: "#" },
      { text: "Ambassadors Program", href: "#" },
    ],
  },
  {
    title: "Categories",
    links: [
      { text: "Video", href: "#" },
      { text: "Logo", href: "#" },
      { text: "Graphic Design", href: "#" },
      { text: "Website", href: "#" },
      { text: "Mockup", href: "#" },
    ],
  },
  {
    title: "Video Templates",
    links: [
      { text: "Intro Maker", href: "#" },
      { text: "Animation Videos", href: "#" },
      { text: "Music Visualizations", href: "#" },
      { text: "Video Editing Templates", href: "#" },
      { text: "Invitation Videos", href: "#" },
      { text: "Slideshow Templates", href: "#" },
      { text: "Presentation Videos", href: "#" },
      { text: "Social Media Videos", href: "#" },
      { text: "Video Ad Templates", href: "#" },
      { text: "Sales Videos", href: "#" },
    ],
  },
  {
    title: "Video Making Tools",
    links: [
      { text: "Free Music Visualizer", href: "#" },
      { text: "YouTube Intro Maker", href: "#" },
      { text: "Animation Maker", href: "#" },
      { text: "Logo Animation", href: "#" },
      { text: "Sound Wave Generator", href: "#" },
      { text: "Audio Waveform Generator", href: "#" },
      { text: "Cartoon Maker", href: "#" },
      { text: "Birthday Video Maker", href: "#" },
      { text: "Video Maker", href: "#" },
      { text: "Animated Text Generator", href: "#" },
      { text: "Promo Video Creator", href: "#" },
      { text: "3D Video Maker", href: "#" },
      { text: "Explainer Video Maker", href: "#" },
      { text: "Whiteboard Video Maker", href: "#" },
      { text: "Slideshow Video Creator", href: "#" },
      { text: "Product Demo Video Maker", href: "#" },
      { text: "Event Video Maker", href: "#" },
      { text: "Corporate Video Maker", href: "#" },
      { text: "Educational Video Maker", href: "#" },
      { text: "Training Video Maker", href: "#" },
    ],
  },
  {
    title: "AI Tools",
    links: [
      { text: "AI Video Generator", href: "#" },
      { text: "AI Animation Generator", href: "#" },
      { text: "AI Video Editor", href: "#" },
      { text: "Text to Video AI", href: "#" },
      { text: "AI Website Builder", href: "#" },
      { text: "AI Business Name Generator", href: "#" },
    ],
  },
];

const LinksContent = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="Footer-navigation">
      <div className="links-item">
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="links-content">
            <p>{section.title}</p>
            <ul>
              {section.links
                .slice(0, showMore ? 20 : 10)
                .map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href}>{link.text}</a>
                  </li>
                ))}
            </ul>
            {section.title === "Video Making Tools" &&
              section.links.length > 10 && (
                <p className="see-more" onClick={() => setShowMore(!showMore)}>
                  {showMore ? "See less" : "See more"}
                </p>
              )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default LinksContent;
