import React from "react";
import EducationItem from "./EducationItem";

const Education = ({ onChange, onAdd, onDelete, items }) => {
  return (
    <div className="section-container">
      <h2>Education</h2>
      <div className="section-items">
        {items.map(function (item) {
          return (
            <EducationItem
              key={item.id}
              id={item.id}
              content={item.content}
              onChange={onChange}
              onDelete={onDelete}
            />
          );
        })}
      </div>
      <button className="add-button" onClick={onAdd}>
        Add
      </button>
    </div>
  );
};

export default Education;
