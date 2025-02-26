import React, { useState, useRef, useEffect } from "react";
import "../styles/innovative.css";
export default function Innovative() {
  const [activeId, setActiveId] = useState(null);
  const contentRefs = useRef({});

  const toggleBox = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  useEffect(() => {
    Object.keys(contentRefs.current).forEach((key) => {
      const content = contentRefs.current[key];
      if (content) {
        if (activeId === Number(key)) {
          content.style.height = content.scrollHeight + "px";
        } else {
          content.style.height = "0px";
        }
      }
    });
  }, [activeId]);

  const contentData = [
    {
      id: 1,
      title: "Educational Content",
      imgSrc:
        "https://www.renderforest.com/landing-assets/_next/image?url=https%3A%2F%2Fstatic.rfstat.com%2Frenderforest%2Fimages%2Fv2%2Flanding-pics%2Fai-cartoon-generator%2Finnvoative-1.avif&w=32&q=75",
      text: "Use entertaining cartoon animations to transform education by making lessons more fun. Animated lessons capture students' attention, simplify complex subjects, and boost retention, making them ideal for educators seeking to innovate their teaching methods.",
    },
    {
      id: 2,
      title: "Marketing Campaigns",
      imgSrc:
        "https://www.renderforest.com/landing-assets/_next/image?url=https%3A%2F%2Fstatic.rfstat.com%2Frenderforest%2Fimages%2Fv2%2Flanding-pics%2Fai-cartoon-generator%2Finnvoative-2.avif&w=32&q=75",
      text: "Use engaging cartoon animations on social media to increase brand awareness and engagement. Social media content with animation consistently receives more views, likes, and shares. You can broaden your target audience and increase your online impact.",
    },
    {
      id: 3,
      title: "Storytelling and Entertainment",
      imgSrc:
        "https://www.renderforest.com/landing-assets/_next/image?url=https%3A%2F%2Fstatic.rfstat.com%2Frenderforest%2Fimages%2Fv2%2Flanding-pics%2Fai-cartoon-generator%2Finnvoative-3.avif&w=32&q=75",
      text: "Authors, storytellers, and entertainment creators will benefit by elevating storytelling and bringing narratives to life with dynamic cartoon videos. Authors and storytellers can visualize their tales in a visually appealing format, adding depth and excitement to their creative works.",
    },
    {
      id: 4,
      title: "Product Demonstrations",
      imgSrc:
        "https://www.renderforest.com/landing-assets/_next/image?url=https%3A%2F%2Fstatic.rfstat.com%2Frenderforest%2Fimages%2Fv2%2Flanding-pics%2Fai-cartoon-generator%2Finnvoative-4.avif&w=32&q=75",
      text: "Businesses can create clear and engaging product demonstrations that highlight benefits and functionalities, making it easier for potential customers to grasp and appreciate your offerings, which is a great approach to drive interest and sales.",
    },
    {
      id: 5,
      title: "Trainings and Tutorials",
      imgSrc:
        "https://www.renderforest.com/landing-assets/_next/image?url=https%3A%2F%2Fstatic.rfstat.com%2Frenderforest%2Fimages%2Fv2%2Flanding-pics%2Fai-cartoon-generator%2Finnvoative-5.avif&w=32&q=75",
      text: "Enhance trainings and tutorials with animated videos that are easy to follow. Companies and educators can break down complex procedures into simple, visual steps, improving comprehension and retention.",
    },
  ];

  return (
    <section className="innovative-section">
      <h2>
        <span>Innovative Ways to Use </span>
        Our AI Cartoon Generator
      </h2>
      <div className="innovative-container">
        <div className="innovative-left">
          <div className="innovative-left-div">
            <iframe
              className="iframe"
              src="https://www.youtube.com/embed/37luZbEMAt4"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="AI Cartoon Generator"
            ></iframe>
          </div>
        </div>

        <div className="innovative-right">
          {contentData.map((item) => (
            <div
              key={item.id}
              className={`innovative-content2 box-${item.id} ${
                activeId === item.id ? "active" : ""
              }`}
              onClick={() => toggleBox(item.id)}
            >
              <div className="innovative-box">
                <div>
                  <div className="title-container">
                    <img src={item.imgSrc} alt={item.title} />
                    <h3>{item.title}</h3>
                  </div>
                  <div
                    ref={(el) => (contentRefs.current[item.id] = el)}
                    className="innovative-box-content"
                    style={{
                      overflow: "hidden",
                      transition: "height 0.2s ease",
                    }}
                  >
                    <p>{item.text}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
