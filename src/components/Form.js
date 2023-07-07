import React from "react";
import { useState, useRef } from "react";
import Input from "./Input";

const Form = () => {
  const [formValues, setFormValues] = useState([
    {
      label: "Name",
      type: "text",
      value: "",
    },
  ]);

  function handleChange(e, index) {
    const values = [...formValues];
    console.log(values);
    values[index].value = e.target.value;
    setFormValues(values);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formValues);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {formValues.map((obj, index) => (
          <Input
            key={index}
            objValue={obj}
            onChange={handleChange}
            index={index}
          />
        ))}
        <button type="submit" className="submit-btn">
          Sumbit
        </button>
      </form>
    </div>
  );
};

export default Form;
