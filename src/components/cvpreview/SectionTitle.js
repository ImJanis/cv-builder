import React from "react";

const SectionTitle = ({ name }) => {
  return (
    <div className="section-title-container">
      <h3 className="section-title">{name}</h3>
      <hr />
    </div>
  );
};

export default SectionTitle;
