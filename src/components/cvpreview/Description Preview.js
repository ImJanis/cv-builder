import React from "react";
import SectionTitle from "./SectionTitle";

const DescriptionPreview = ({ personalInformations }) => {
  return (
    <div className="description-container">
      <SectionTitle name="Description" />
      <p>{personalInformations.description}</p>
    </div>
  );
};

export default DescriptionPreview;
