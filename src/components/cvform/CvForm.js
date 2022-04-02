import React, { Component } from "react";
import Education from "./Education";
import Experience from "./Experience";
import Personal from "./Personal";

class CvForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
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
    } = this.props;
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
  }
}

export default CvForm;
