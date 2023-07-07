import React from "react";

const Form = () => {
  return (
    <div>
      <form>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <button type="submit" className="submit-btn">
          Sumbit
        </button>
      </form>
    </div>
  );
};

export default Form;
