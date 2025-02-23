import React from "react";
import "../../styles/VideoGenerator page styles/vdGenHero.css";

export default function VdGenHero() {
  return (
    <section className="hero">
      <div className="hero-container container">
        <div className="hero-content">
          <h1 className="vdGen-title">AI Video Generator</h1>
          <h2 className="vdGen-subtitle">Turn Ideas into Videos in Minutes</h2>
          <p className="content-desc">
            Create stunning videos with Renderforest AI Video Generator. Just
            type your idea and watch our AI generate top-quality videos for you.
            Make Videos with AI now!
          </p>
          <button className="rf-btn-ai pulse gradient-button ">
            <img
              src="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/button-icon.svg"
              alt=""
            />
            <p>Generate AI Video</p>
          </button>
          <div className="hero-content-stars">
            <picture>
              <source
                srcset="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/star-1.webp"
                width="66px"
                height="74px"
                media="(min-width:992px)"
                type="image/webp"
              />
              <img
                class="hero__content_star star-1"
                src="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/star-1.png"
                alt="star "
              />
            </picture>
            <picture>
              <source
                srcset="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/star-2.webp"
                width="38px"
                height="42px"
                media="(min-width:992px)"
                type="image/webp"
              />
              <img
                class="hero__content_star star-2"
                src="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/star-2.png"
                alt="star"
              />
            </picture>
            <picture>
              <source
                srcset="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/star-3.webp"
                width="36px"
                height="42px"
                media="(min-width:992px)"
                type="image/webp"
              />
              <img
                class="hero__content_star star-3"
                src="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/star-3.png"
                alt="star"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}
