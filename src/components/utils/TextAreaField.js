import React from "react";

const TextAreaField = ({ value, name, onChange, placeholder }) => {
  return (
    <div className="text-area-field">
      <textarea
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextAreaField;
