import React from "react";
const MoreItem = ({ text, href }) => {
  return (
    <div className="more-item">
      <a href={href}>
        <p>{text}</p>
      </a>
    </div>
  );
};

export default MoreItem;
