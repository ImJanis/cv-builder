import React from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const MainSectionPreview = ({
  personalInformations,
  experienceItems,
  educationItems,
}) => {
  return (
    <div className="main-section-preview">
      <LeftSection
        personalInformations={personalInformations}
        experienceItems={experienceItems}
        educationItems={educationItems}
      />
      <RightSection personalInformations={personalInformations} />
    </div>
  );
};

export default MainSectionPreview;
