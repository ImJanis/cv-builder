import React from "react";
import SectionTitle from "./SectionTitle";
import EducationItemPreview from "./EducationItemPreview";

const EducationPreview = ({ educationItems }) => {
  return (
    <div className="education-container">
      <SectionTitle name="Education" />
      <div className="preview-items">
        {educationItems.map(function (item) {
          return (
            <EducationItemPreview
              key={item.id}
              id={item.id}
              content={item.content}
            />
          );
        })}
      </div>
    </div>
  );
};

export default EducationPreview;
