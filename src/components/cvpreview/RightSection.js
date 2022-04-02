import React, { Component } from "react";
import SectionTitle from "./SectionTitle";

class RightSection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="right-section">
        <SectionTitle name="Personal Details" />
        <div className="subsection">
          <h4>Address</h4>
          <p>{this.props.personalInformations.adress}</p>
        </div>
        <div className="subsection">
          <h4>Phone Number</h4>
          <p>{this.props.personalInformations.phoneNumber}</p>
        </div>
        <div className="subsection">
          <h4>Email</h4>
          <p>{this.props.personalInformations.email}</p>
        </div>
      </div>
    );
  }
}

export default RightSection;
