import React from "react";
import { useState } from "react";

const Form = () => {
  const [formValues, setFormValues] = useState({});

  function handleChange(e) {
    setFormValues((prevFormValues) => {
      return { ...prevFormValues, [e.target.id]: e.target.value };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formValues);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={formValues.name || " "}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={formValues.email || ""}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="submit-btn">
          Sumbit
        </button>
      </form>
    </div>
  );
};

export default Form;
