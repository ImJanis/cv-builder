import React, { Component } from "react";
import EducationPreview from "./EducationPreview";
import ExperiencePreview from "./ExperiencePreview";
import DescriptionPreview from "./Description Preview";

class LeftSection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="left-section">
        <DescriptionPreview
          personalInformations={this.props.personalInformations}
        />
        <ExperiencePreview experienceItems={this.props.experienceItems} />
        <EducationPreview educationItems={this.props.educationItems} />
      </div>
    );
  }
}

export default LeftSection;
