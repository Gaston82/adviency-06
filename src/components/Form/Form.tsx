import React, { useState } from "react";
import "./Form.css";

interface FormProps {
  onAddGifts: (inputValue: string) => void;
}

const Form = ({ onAddGifts }: FormProps): React.ReactElement => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAddGifts(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="form__input"
        type="text"
        placeholder="socks, jeans,t-shirt"
        value={inputValue}
        autoFocus
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      />
      <button className="form__button" type="submit">
        Add
      </button>
    </form>
  );
};

export default Form;
