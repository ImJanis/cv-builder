import React, { Component } from "react";
import SectionTitle from "./SectionTitle";
import EducationItemPreview from "./EducationItemPreview";

class EducationPreview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="education-container">
        <SectionTitle name="Education" />
        <div className="preview-items">
          {this.props.educationItems.map(function (item) {
            return <EducationItemPreview content={item.content} />;
          })}
        </div>
      </div>
    );
  }
}

export default EducationPreview;
