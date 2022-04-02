import React, { Component } from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

class MainSectionPreview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-section-preview">
        <LeftSection
          personalInformations={this.props.personalInformations}
          experienceItems={this.props.experienceItems}
          educationItems={this.props.educationItems}
        />
        <RightSection personalInformations={this.props.personalInformations} />
      </div>
    );
  }
}

export default MainSectionPreview;
