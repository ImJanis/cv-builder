import React from "react";
import InputField from "../utils/InputField";
import TextAreaField from "../utils/TextAreaField";

const Personal = ({ onChange, items }) => {
  return (
    <div className="section-container">
      <h2>Personal</h2>
      <div className="section-items">
        <div className="section-item">
          <InputField
            type="text"
            value={items.firstName}
            name="firstName"
            onChange={(e) => onChange(e, items.id)}
            placeholder="First Name"
          />
          <InputField
            type="text"
            value={items.lastName}
            name="lastName"
            onChange={(e) => onChange(e, items.id)}
            placeholder="Last Name"
          />
          <InputField
            type="text"
            value={items.title}
            name="title"
            onChange={(e) => onChange(e, items.id)}
            placeholder="Title"
          />
          <InputField
            type="text"
            value={items.adress}
            name="adress"
            onChange={(e) => onChange(e, items.id)}
            placeholder="Adress"
          />
          <InputField
            type="text"
            value={items.phoneNumber}
            name="phoneNumber"
            onChange={(e) => onChange(e, items.id)}
            placeholder="Phone Number"
          />
          <InputField
            type="text"
            value={items.email}
            name="email"
            onChange={(e) => onChange(e, items.id)}
            placeholder="Email"
          />
          <TextAreaField
            value={items.description}
            name="description"
            onChange={(e) => onChange(e, items.id)}
            placeholder="Description"
          />
        </div>
      </div>
    </div>
  );
};

export default Personal;
