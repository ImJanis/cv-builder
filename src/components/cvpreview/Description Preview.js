import React, { Component } from "react";
import SectionTitle from "./SectionTitle";

class DescriptionPreview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="description-container">
        <SectionTitle name="Description" />
        <p>{this.props.personalInformations.description}</p>
      </div>
    );
  }
}

export default DescriptionPreview;
