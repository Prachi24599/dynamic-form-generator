import React from "react";

const Input = ({ objValue, onChange, index }) => {
  const { label, type, value } = objValue;

  return (
    <div className="input-group">
      <label htmlFor={label}>{label}</label>
      <div className="input">
        <input
          type={type || "text"}
          id={label}
          value={value || ""}
          onChange={(e) => onChange(e, index)}
        />
      </div>
    </div>
  );
};

export default Input;
