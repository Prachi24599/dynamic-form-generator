import React from "react";
import { useState, useRef } from "react";
import Input from "./Input";

const Form = () => {
  const [formValues, setFormValues] = useState([]);
  const [toggle, setTogggle] = useState(false);

  const inputRef = useRef();
  const selectRef = useRef();

  const handleChange = (e, index) => {
    const values = [...formValues];
    console.log(values);
    values[index].value = e.target.value;
    setFormValues(values);
  };

  const handleAddField = (e) => {
    e.preventDefault();
    const values = [...formValues];
    values.push({
      label: inputRef.current.value || "label",
      type: selectRef.current.value || "text",
      value: "",
    });
    setFormValues(values);
    setTogggle(false);
  };

  const addBtnClick = (e) => {
    e.preventDefault();
    setTogggle(true);
  };

  const handleDeleteField = (e, index) => {
    const values = [...formValues];
    values.splice(index, 1);
    setFormValues(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      formValues.map((val) => {
        return { [val.label]: val.value };
      })
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {formValues.map((obj, index) => (
          <Input
            key={index}
            objValue={obj}
            onChange={handleChange}
            index={index}
            deleteField={handleDeleteField}
          />
        ))}
        {!toggle ? (
          <div className="center">
            <button className="add-btn" onClick={addBtnClick}>
              Add new
            </button>
          </div>
        ) : (
          <div className="dialog-box">
            <input type="text" placeholder="label" ref={inputRef} />
            <select ref={selectRef}>
              <option value="text">Text</option>
              <option value="number">Number</option>
              <option value="email">Email</option>
              <option value="password">Password</option>
              <option value="checkbox">Checkbox</option>
              <option value="radio">Radio</option>
              <option value="select">Select</option>
            </select>
            <button className="add-btn" onClick={handleAddField}>
              Add
            </button>
          </div>
        )}

        <button type="submit" className="submit-btn">
          Sumbit
        </button>
      </form>
    </div>
  );
};

export default Form;
