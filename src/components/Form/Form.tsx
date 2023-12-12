import React, { useState } from "react";
import "./Form.css";
import { GiftStructure } from "../../types";

interface FormProps {
  onAddGifts: (gift: GiftStructure) => void;
}

const Form = ({ onAddGifts }: FormProps): React.ReactElement => {
  const [gift, setGift] = useState({
    id: crypto.randomUUID(),
    name: "",
    quantity: 1,
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (gift.name === "") {
      return;
    }
    onAddGifts(gift);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGift({
      ...gift,
      [event.target.name]: event.target.value,
    });
  };

  const { name, quantity } = gift;

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="form__input"
        type="text"
        placeholder="socks, jeans,t-shirt"
        value={name}
        name="name"
        onChange={handleInputChange}
        autoComplete="off"
      />
      <input
        type="number"
        min={1}
        className="form__input"
        value={quantity}
        name="quantity"
        onChange={handleInputChange}
      />
      <button className="form__button" type="submit">
        Add
      </button>
    </form>
  );
};

export default Form;
