import React, { useState } from "react";
import "./Form.css";
import { GiftStructure } from "../../types";
import Button from "../Button/Button";

interface FormProps {
  onAddGifts: (gift: GiftStructure) => void;
  onCloseModal: () => void;
}

const Form = ({ onAddGifts, onCloseModal }: FormProps): React.ReactElement => {
  const [gift, setGift] = useState<GiftStructure>({
    id: crypto.randomUUID(),
    name: "",
    to: "",
    quantity: 1,
    image: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (gift.name === "") {
      return;
    }
    onAddGifts(gift);
    onCloseModal();
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGift({
      ...gift,
      [event.target.name]: event.target.value,
    });
  };

  const { name, quantity, image, to } = gift;

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
        className="form__input"
        type="url"
        name="image"
        value={image}
        placeholder="http://image"
        onChange={handleInputChange}
      />
      <input
        type="number"
        min={1}
        className="form__input"
        value={quantity}
        name="quantity"
        onChange={handleInputChange}
      />
      <input
        className="form__input"
        type="text"
        placeholder="Peter,Laura,Vida..."
        value={to}
        name="to"
        onChange={handleInputChange}
        autoComplete="off"
      />
      <Button type={"submit"} text={"Add"} />
    </form>
  );
};

export default Form;
