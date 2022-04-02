import React from "react";
import HeaderPreview from "./HeaderPreview";
import MainSectionPreview from "./MainSectionPreview";

const CvPreview = ({
  personalInformations,
  experienceItems,
  educationItems,
}) => {
  return (
    <div className="cv-preview">
      <HeaderPreview personalInformations={personalInformations} />
      <MainSectionPreview
        personalInformations={personalInformations}
        experienceItems={experienceItems}
        educationItems={educationItems}
      />
    </div>
  );
};

export default CvPreview;
