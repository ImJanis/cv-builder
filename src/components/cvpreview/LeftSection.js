import React from "react";
import EducationPreview from "./EducationPreview";
import ExperiencePreview from "./ExperiencePreview";
import DescriptionPreview from "./Description Preview";

const LeftSection = ({
  personalInformations,
  experienceItems,
  educationItems,
}) => {
  return (
    <div className="left-section">
      <DescriptionPreview personalInformations={personalInformations} />
      <ExperiencePreview experienceItems={experienceItems} />
      <EducationPreview educationItems={educationItems} />
    </div>
  );
};

export default LeftSection;
