import React, { Component } from "react";
import EducationItem from "./EducationItem";

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onChange, onAdd, onDelete, items } = this.props;
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
  }
}

export default Education;
