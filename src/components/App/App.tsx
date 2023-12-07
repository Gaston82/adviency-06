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

  const handleDeleteGift = (giftId: string): void => {
    const filteredGifts = gifts.filter((gift) => gift.id !== giftId);
    setGifts(filteredGifts);
  };

  const handleDeleteGifts = (): void => {
    setGifts([]);
  };

  return (
    <section className="container">
      <h1 className="app-title">Regalos</h1>
      <Form onAddGifts={handleAddGift} />
      {gifts.length <= 0 ? (
        <>
          <p>You don't buy anything yet?</p>
          <p>Start now</p>
        </>
      ) : (
        <GiftList
          gifts={gifts}
          onDeleteGift={handleDeleteGift}
          onDeleteGifts={handleDeleteGifts}
        />
      )}
    </section>
  );
};
export default App;
