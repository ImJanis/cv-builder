import React, { Component } from "react";

class EducationItemPreview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="preview-item-container">
        <div className="date-container">
          <p>{this.props.content.from + " - " + this.props.content.to}</p>
        </div>
        <div className="right-wing">
          <h4>{this.props.content.universityName}</h4>
          <p>{this.props.content.degree}</p>
          <p>{this.props.content.subject}</p>
        </div>
      </div>
    );
  }
}

export default EducationItemPreview;
