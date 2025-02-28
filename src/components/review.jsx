import React from "react";
import ReviewCard from "./reviewCard";
import "../styles/review.css";

const Review = () => {
  const reviews = [
    {
      title: "Something really helpfull for videomakers",
      text: "I work in the media field and often I need to make short videos or intros for my tv station and is just great.Lot of options and fast encoding, this make me to save a lot of time and have a professional product to show to my viewers.",
      avatarInitials: "An",
      author: "Andrew • Travel Vlogger",
    },
    {
      title:
        "If you're looking to add value to your marketing start with Renderforest!",
      text: "Renderforest has been a staple in my advertising internally and externally. Our target audience loves it and always has delightful feedback about it. Whether it was a logo created, or a video created using the awesome templates, everything is just so simple to use.",
      avatarInitials: "Pa",
      author: "Paul • DIY Youtuber",
      cardClass: "review-card2",
      avatarClass: "userName-avatar2",
    },
    {
      title: "Create awesome things",
      text: "Very nice website. Great templates, easy to make, high availability and great quality. Everyone will find something for themselves and their company.",
      avatarInitials: "La",
      author: "Laura • Beauty Vlogger",
      cardClass: "review-card3",
      avatarClass: "userName-avatar3",
    },
  ];

  return (
    <section className="review-section">
      <div className="review-container">
        <h2>
          See <span>Why People Choose</span> Renderforest’s AI Cartoon Maker
        </h2>
        <div className="review-cards">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
