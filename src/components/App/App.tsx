import "./App.css";
import Form from "../Form/Form";
import GiftList from "../GiftList/GiftList";
import { useState } from "react";
import { GiftStructure } from "../../types";
import { giftsApi } from "../../data";

const App = (): React.ReactElement => {
  const [gifts, setGifts] = useState<GiftStructure[]>(giftsApi);

  const handleAddGift = (giftName: string): void => {
    const newGift = {
      id: crypto.randomUUID(),
      name: giftName,
    };
    setGifts([...gifts, newGift]);
  };

  return (
    <section className="container">
      <h1 className="app-title">Regalos</h1>
      <Form onAddGifts={handleAddGift} />
      <GiftList gifts={gifts} onAddGift={handleAddGift} />
    </section>
  );
};
export default App;
