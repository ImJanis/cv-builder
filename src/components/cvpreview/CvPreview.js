import React, { Component } from "react";
import HeaderPreview from "./HeaderPreview";
import MainSectionPreview from "./MainSectionPreview";

class CvPreview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="cv-preview">
        <HeaderPreview personalInformations={this.props.personalInformations} />
        <MainSectionPreview
          personalInformations={this.props.personalInformations}
          experienceItems={this.props.experienceItems}
          educationItems={this.props.educationItems}
        />
      </div>
    );
  }
}

export default CvPreview;
