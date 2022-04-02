import React, { Component } from "react";
import InputField from "../utils/InputField";

class ExperienceItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { key, id, content, onChange, onDelete } = this.props;
    return (
      <div className="section-item">
        <div className="section-item-inputs">
          <InputField
            type="text"
            value={content.position}
            name="position"
            onChange={(e) => onChange(e, id)}
            placeholder="Position"
          />
          <InputField
            type="text"
            value={content.company}
            name="company"
            onChange={(e) => onChange(e, id)}
            placeholder="Company"
          />
          <InputField
            type="text"
            name="city"
            value={content.city}
            onChange={(e) => onChange(e, id)}
            placeholder="City"
          />
          <InputField
            type="text"
            name="from"
            value={content.from}
            onChange={(e) => onChange(e, id)}
            placeholder="From"
          />
          <InputField
            type="text"
            name="to"
            value={content.to}
            onChange={(e) => onChange(e, id)}
            placeholder="To"
          />
        </div>
        <button className="delete-button" onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    );
  }
}

export default ExperienceItem;
