import React from "react";

const InputField = ({ type, value, name, onChange, placeholder }) => {
  return (
    <div className="input-field">
      <input
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
