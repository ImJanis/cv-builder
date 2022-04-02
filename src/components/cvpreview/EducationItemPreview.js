import React from "react";

const EducationItemPreview = ({ content }) => {
  return (
    <div className="preview-item-container">
      <div className="date-container">
        <p>{content.from + " - " + content.to}</p>
      </div>
      <div className="right-wing">
        <h4>{content.universityName}</h4>
        <p>{content.degree}</p>
        <p>{content.subject}</p>
      </div>
    </div>
  );
};

export default EducationItemPreview;
