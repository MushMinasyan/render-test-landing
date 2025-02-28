import React from "react";

const ReviewCard = React.memo(({ review }) => {
  return (
    <div className={`review-card ${review.cardClass || ""}`}>
      <div className="review-text">
        <h3>{review.title}</h3>
        <p>{review.text}</p>
      </div>
      <div className="userName">
        <div className={`userName-avatar ${review.avatarClass || ""}`}>
          <p>{review.avatarInitials}</p>
        </div>
        <p className="name">{review.author}</p>
      </div>
    </div>
  );
});

export default ReviewCard;
