import React from "react";
import "../styles/review.css";
const Review = () => {
  return (
    <section className="review-section">
      <div className="review-container">
        <h2>
          See
          <span> Why People Choose </span>
          Renderforest’s AI Cartoon Maker
        </h2>
        <div className="review-cards">
          <div className="review-card">
            <div className="review-text">
              <h3>Something really helpfull for videomakers</h3>
              <p>
                I work in the media field and often I need to make short videos
                or intros for my tv station and is just great.Lot of options and
                fast encoding, this make me to save a lot of time and have a
                professional product to show to my viewers.
              </p>
            </div>
            <div className="userName">
              <div className="userName-avatar">
                <p>An</p>
              </div>
              <p className="name">Andrew • Travel Vlogger</p>
            </div>
          </div>
          <div className="review-card review-card2">
            <div className="review-text">
              <h3>
                If you're looking to add value to your marketing start with
                Renderforest!
              </h3>
              <p>
                Renderforest has been a staple in my advertising internally and
                externally. Our target audience loves it and always has
                delightful feedback about it. Whether it was a logo created, or
                a video created using the awesome templates, everything is just
                so simple to use.
              </p>
            </div>
            <div className="userName">
              <div className="userName-avatar userName-avatar2">
                <p>Pa</p>
              </div>
              <p className="name">Paul • DIY Youtuber</p>
            </div>
          </div>
          <div className="review-card review-card3">
            <div className="review-text">
              <h3>Create awesome things</h3>
              <p>
                Very nice website. Great templates, easy to make, high
                availability and great quality. Everyone will find something for
                themselves and their company.
              </p>
            </div>
            <div className="userName">
              <div className="userName-avatar userName-avatar3">
                <p>La</p>
              </div>
              <p className="name">Laura • Beauty Vlogger</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Review;
