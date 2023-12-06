import React from "react";
import "./Form.css";

const Form = (): React.ReactElement => {
  return (
    <form>
      <input
        className="form__input"
        type="text"
        placeholder="socks, jeans,t-shirt"
      />
      <button className="form__button" type="submit">
        Add
      </button>
    </form>
  );
};

export default Form;
