import React from "react";
import Education from "./Education";
import Experience from "./Experience";
import Personal from "./Personal";

const CvForm = ({
  personalInformations,
  experienceItems,
  educationItems,
  onChangeExperience,
  onAddExperience,
  onDeleteExperience,
  onChangeEducation,
  onAddEducation,
  onDeleteEducation,
  onChangePersonal,
  onLoadExample,
  onReset,
}) => {
  return (
    <div className="cv-form">
      <Personal onChange={onChangePersonal} items={personalInformations} />
      <Experience
        onChange={onChangeExperience}
        onAdd={onAddExperience}
        onDelete={onDeleteExperience}
        items={experienceItems}
      />
      <Education
        onChange={onChangeEducation}
        onAdd={onAddEducation}
        onDelete={onDeleteEducation}
        items={educationItems}
      />
      <button className="load-example-button" onClick={onLoadExample}>
        Load example
      </button>
      <button className="reset-button" onClick={onReset}>
        Reset
      </button>
    </div>
  );
};

export default CvForm;
