const GenerateStepsContainer = () => {
  const steps = [
    {
      id: 1,
      className: "step-one",
      img: "https://www.renderforest.com/landing-assets/_next/image?url=https%3A%2F%2Fstatic.rfstat.com%2Frenderforest%2Fimages%2Fv2%2Flanding-pics%2Fai-cartoon-generator%2Fgenerate-image-1.avif&w=640&q=75",
      title: "Input Your Cartoon Concept",
      text: "Start by inputting your into our AI cartoon maker. Enter your idea or script, and our AI will take it from there. To make sure the animation reflects your goals and vision, you can set the foundation for your cartoon at this stage.",
      video:
        "https://videostatic.rfstat.com/landing/single-landing/generate-step-1-new.mp4",
    },
    {
      id: 2,
      className: "step-two",
      img: "https://www.renderforest.com/landing-assets/_next/image?url=https%3A%2F%2Fstatic.rfstat.com%2Frenderforest%2Fimages%2Fv2%2Flanding-pics%2Fai-cartoon-generator%2Fgenerate-image-2.avif&w=640&q=75",
      title: "Generate Cartoon With AI",
      text: "Start by inputting your into our AI cartoon maker. Enter your idea or script, and our AI will take it from there. To make sure the animation reflects your goals and vision, you can set the foundation for your cartoon at this stage.",
      video:
        "https://videostatic.rfstat.com/landing/single-landing/generate-step-2-new.mp4",
    },
    {
      id: 3,
      className: "step-three",
      img: "https://www.renderforest.com/landing-assets/_next/image?url=https%3A%2F%2Fstatic.rfstat.com%2Frenderforest%2Fimages%2Fv2%2Flanding-pics%2Fai-cartoon-generator%2Fgenerate-image-1.avif&w=640&q=75",
      title: "Edit and Export",
      text: "Fine-tune your cartoon by editing scenes, adjusting character actions, and refining animations. Add music from our catalog, apply transitions, and use text-to-speech to give your characters a voice. Once satisfied, review and export your cartoon in your preferred format, ready to share across platforms.",
      video:
        "https://videostatic.rfstat.com/landing/single-landing/generate-step-3-new.mp4",
    },
  ];

  return (
    <section className="generate-steps-section">
      <div className="generate-steps-container">
        <h2>
          How to <span>Generate Cartoons</span> with AI
        </h2>
        <p className="generate-steps-section-first-p">
          Creating cartoons using AI has never been easier.
        </p>
      </div>
      {steps.map((step, index) => (
        <div key={step.id} className={`generate-item ${step.className}`}>
          {index === 1 ? (
            // For the second step, swap the video and text block
            <>
              <div className="generate-box-video">
                <video src={step.video} autoPlay loop muted playsInline />
              </div>
              <div className="generate-step-box">
                <img src={step.img} alt="itemPhoto" />
                <div>
                  <div className="title-number-container">
                    <div className="generate-box-number">
                      <h3>{step.id}</h3>
                    </div>
                    <h3>{step.title}</h3>
                  </div>
                  <p>{step.text}</p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="generate-step-box">
                <img src={step.img} alt="itemPhoto" />
                <div>
                  <div className="title-number-container">
                    <div className="generate-box-number">
                      <h3>{step.id}</h3>
                    </div>
                    <h3>{step.title}</h3>
                  </div>
                  <p>{step.text}</p>
                </div>
              </div>
              <div className="generate-box-video">
                <video src={step.video} autoPlay loop muted playsInline />
              </div>
            </>
          )}
        </div>
      ))}
      <a
        className="link-primary-button"
        href="https://www.renderforest.com/project/ai-video"
      >
        Create AI Cartoons
      </a>
    </section>
  );
};
export default GenerateStepsContainer;
