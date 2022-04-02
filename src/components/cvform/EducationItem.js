import React from "react";
import InputField from "../utils/InputField";

const EducationItem = ({ id, content, onChange, onDelete }) => {
  return (
    <div className="section-item">
      <div className="section-item-inputs">
        <InputField
          type="text"
          value={content.universityName}
          name="universityName"
          onChange={(e) => onChange(e, id)}
          placeholder="University Name"
        />
        <InputField
          type="text"
          value={content.city}
          name="city"
          onChange={(e) => onChange(e, id)}
          placeholder="City"
        />
        <InputField
          type="text"
          name="degree"
          value={content.degree}
          onChange={(e) => onChange(e, id)}
          placeholder="Degree"
        />
        <InputField
          type="text"
          name="subject"
          value={content.subject}
          onChange={(e) => onChange(e, id)}
          placeholder="Subject"
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
};

export default EducationItem;
