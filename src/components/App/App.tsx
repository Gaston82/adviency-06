import "./App.css";
import Form from "../Form/Form";
import GiftList from "../GiftList/GiftList";
import { useState } from "react";
import { GiftStructure } from "../../types";
import { giftsApi } from "../../data";

const App = (): React.ReactElement => {
  const [gifts, setGifts] = useState<GiftStructure[]>(giftsApi);

  const handleAddGift = (gift: GiftStructure): void => {
    setGifts([...gifts, gift]);
  };

  const handleDeleteGift = (giftId: string): void => {
    const filteredGifts = gifts.filter((gift) => gift.id !== giftId);
    setGifts(filteredGifts);
  };

  const handleDeleteGifts = (): void => {
    setGifts([]);
  };

  return (
    <div className="container">
      <main className="main">
        <h1 className="app-title">Regalos</h1>
        <Form onAddGifts={handleAddGift} />
        {gifts.length <= 0 ? (
          <>
            <p>You dont buy anything yet?</p>
            <p>Start now</p>
          </>
        ) : (
          <GiftList
            gifts={gifts}
            onDeleteGift={handleDeleteGift}
            onDeleteGifts={handleDeleteGifts}
          />
        )}
      </main>
    </div>
  );
};
export default App;
