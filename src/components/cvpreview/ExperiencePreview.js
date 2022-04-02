import React, { Component } from "react";
import SectionTitle from "./SectionTitle";
import ExperienceItemPreview from "./ExperienceItemPreview";

class ExperiencePreview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="experience-container">
        <SectionTitle name="Experience" />
        <div className="preview-items">
          {this.props.experienceItems.map(function (item) {
            return <ExperienceItemPreview content={item.content} />;
          })}
        </div>
      </div>
    );
  }
}

export default ExperiencePreview;
