import React from "react";
import SectionTitle from "./SectionTitle";

const RightSection = ({ personalInformations }) => {
  return (
    <div className="right-section">
      <SectionTitle name="Personal Details" />
      <div className="subsection">
        <h4>Address</h4>
        <p>{personalInformations.adress}</p>
      </div>
      <div className="subsection">
        <h4>Phone Number</h4>
        <p>{personalInformations.phoneNumber}</p>
      </div>
      <div className="subsection">
        <h4>Email</h4>
        <p>{personalInformations.email}</p>
      </div>
    </div>
  );
};

export default RightSection;
