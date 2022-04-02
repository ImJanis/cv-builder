import React, { Component } from "react";

class SectionTitle extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="section-title-container">
        <h3 className="section-title">{this.props.name}</h3>
        <hr />
      </div>
    );
  }
}

export default SectionTitle;
