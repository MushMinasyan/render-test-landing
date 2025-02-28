import React, { useState, useEffect } from "react";
import "../styles/faqSection.css";

const FaqSection = () => {
  const [activeIds, setActiveIds] = useState([]);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleBox = (id) => {
    setActiveIds((prevActiveIds) =>
      prevActiveIds.includes(id)
        ? prevActiveIds.filter((item) => item !== id)
        : [...prevActiveIds, id]
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const faqItems = [
    {
      id: 1,
      question: "What is AI cartoon animation?",
      answer:
        "An AI cartoon is an animated video created using artificial intelligence technology. The advanced system automates the animation process, turning written prompts or concepts into dynamic, engaging cartoons.",
    },
    {
      id: 2,
      question: "How to make a cartoon with AI?",
      answer:
        "To create a cartoon with AI, start by describing your idea or storyline in a few sentences. The AI processes your input to generate an outline, which you can edit or accept as is. The AI then animates the cartoon, bringing your concept to life. You can refine your cartoon by adjusting scenes and adding music, transitions, and other elements. Finally, review your animation and export it in your preferred format.",
    },
    {
      id: 3,
      question: "How does the AI Cartoon Generator work?",
      answer:
        "Our AI cartoon creator uses advanced algorithms to convert written prompts into animated cartoons. Users input their concepts and the AI analyzes the description to generate an outline or storyboard. This outline can be customized to better fit the user’s vision. The AI then creates the animation based on the refined outline, and users can add final touches such as music, transitions, and voice overs before exporting and sharing.",
    },
    {
      id: 4,
      question:
        "Is there a limit to the number of cartoon videos I can create?",
      answer:
        "No, there is no limit to the number of cartoon videos you can create with our AI Cartoon Generator free of charge. Whether you need to produce a single animation or multiple cartoons, our platform supports unlimited creation, so you can bring as many ideas to life as you need.",
    },
    {
      id: 5,
      question: "What is the best AI Cartoon Generator?",
      answer:
        "AiCartoonGeneratorLayout.faq-section.faq-items.item-5.description",
    },
  ];

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className={`heading ${isScrolled ? "scroll-active" : ""}`}>
          <h2 className="h2">
            All Your
            <span> AI Cartoon </span>
            Generating Questions Answered
          </h2>
        </div>
        <div className="faq-question">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className={`faq-item ${
                activeIds.includes(item.id) ? "active" : ""
              }`}
              onClick={() => toggleBox(item.id)}
            >
              <div className="faqItem-heading">
                <h3>{item.question}</h3>
                <img
                  className={`arrow ${
                    activeIds.includes(item.id) ? "rotate" : ""
                  }`}
                  src="https://static.rfstat.com/renderforest/images/v2/new-homepage/arrowdown1.svg"
                  alt="img"
                />
              </div>
              {activeIds.includes(item.id) && (
                <div className="faqItem-text">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
