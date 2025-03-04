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
];

const additionalSections = [
  {
    title: "Resources",
    links: [
      { text: "Branding Tools", href: "#" },
      { text: "Blog", href: "#" },
    ],
  },
  {
    title: "Categories",
    links: [
      { text: "Video", href: "#" },
      { text: "Logo", href: "#" },
      { text: "Graphic design", href: "#" },
      { text: "Website", href: "#" },
      { text: "Mockup", href: "#" },
    ],
  },
];

const thirdSections = [
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
];

const videoTools = {
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
    { text: "Whiteboard Animation", href: "#" },
    { text: "Video Animation", href: "#" },
    { text: "Animated Greeting Cards", href: "#" },
    { text: "Infographic Video Maker", href: "#" },
    { text: "Commercial Maker", href: "#" },
    { text: "Mobile App Promo Videos", href: "#" },
    { text: "Kinetic Typography Generator", href: "#" },
    { text: "Minecraft Animation Maker", href: "#" },
    { text: "Slideshow Maker", href: "#" },
    { text: "Video Ad Maker", href: "#" },
  ],
};
const aiTools = [
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
  const [showAll, setShowAll] = useState(false);

  const halfLength = Math.ceil(videoTools.links.length / 2);
  const visibleLinks = showAll
    ? videoTools.links
    : videoTools.links.slice(0, halfLength);

  return (
    <section className="Footer-navigation">
      <div className="links-item">
        {/* Первый блок - Company */}
        {sections.map((section, index) => (
          <div key={index} className="links-content">
            <ul>
              <p>{section.title}</p>
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href={link.href}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Второй блок - Resources + Categories (в одном <div>) */}
        <div className="links-content">
          {additionalSections.map((section, index) => (
            <ul key={index}>
              <p>{section.title}</p>
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href={link.href}>{link.text}</a>
                </li>
              ))}
            </ul>
          ))}
        </div>

        {/* Третий блок - Community */}
        {thirdSections.map((section, index) => (
          <div key={index} className="links-content">
            <ul>
              <p>{section.title}</p>
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href={link.href}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Четвертый блок - Video Making Tools */}
        <div className="links-content">
          <ul>
            <p>{videoTools.title}</p>
            {visibleLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
          {!showAll && (
            <span
              onClick={() => setShowAll(true)}
              className="see-more desktop-only"
            >
              See More
            </span>
          )}
        </div>
        {/* Пятый блок - AI Tools */}
        {aiTools.map((section, index) => (
          <div key={index} className="links-content">
            <ul>
              <p>{section.title}</p>
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href={link.href}>{link.text}</a>
                </li>
              ))}
              <div className="stores-wrapper">
                <p>Video Maker Apps</p>
                <div className="stores-icons-div">
                  <a href="https://apps.apple.com/us/app/ai-video-maker-renderforest/id1488068233">
                    <figure>
                      <img
                        alt="App Store"
                        src="https://static.rfstat.com/renderforest/images/v2/new-homepage/footer/app-store-en.svg"
                      />
                      <img
                        alt="App Store Hover"
                        src="https://static.rfstat.com/renderforest/images/v2/new-homepage/footer/app-store-hover-en.svg"
                      />
                    </figure>
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.renderforest.videomaker">
                    <figure>
                      <img
                        alt="Google Play"
                        src="https://static.rfstat.com/renderforest/images/v2/new-homepage/footer/google-play-en.svg"
                      />
                      <img
                        alt="Google Play Hover"
                        src="https://static.rfstat.com/renderforest/images/v2/new-homepage/footer/google-play-hover-en.svg"
                      />
                    </figure>
                  </a>
                </div>
              </div>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LinksContent;
