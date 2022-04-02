import React from "react";

const ExperienceItemPreview = ({ content }) => {
  return (
    <div className="preview-item-container">
      <div className="date-container">
        <p>{content.from + " - " + content.to}</p>
      </div>
      <div className="right-wing">
        <h4>{content.position}</h4>
        <p>{content.company}</p>
      </div>
    </div>
  );
};

export default ExperienceItemPreview;
