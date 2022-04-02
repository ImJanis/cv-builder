import React from "react";
import SectionTitle from "./SectionTitle";
import ExperienceItemPreview from "./ExperienceItemPreview";

const ExperiencePreview = ({ experienceItems }) => {
  return (
    <div className="experience-container">
      <SectionTitle name="Experience" />
      <div className="preview-items">
        {experienceItems.map(function (item) {
          return (
            <ExperienceItemPreview
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

export default ExperiencePreview;
