import React from "react";

const HeaderPreview = ({ personalInformations }) => {
  return (
    <div className="header-preview">
      <div className="name-container">
        <h1>
          {personalInformations.firstName + " " + personalInformations.lastName}
        </h1>
      </div>
      <div className="title-container">
        <h2>{personalInformations.title}</h2>
      </div>
    </div>
  );
};

export default HeaderPreview;
