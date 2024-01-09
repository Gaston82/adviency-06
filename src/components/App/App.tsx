import "./App.css";
import GiftList from "../GiftList/GiftList";
import { useState } from "react";
import { GiftStructure } from "../../types";
import { giftsApi } from "../../data";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";

const App = (): React.ReactElement => {
  const [gifts, setGifts] = useState<GiftStructure[]>(giftsApi);
  const [showModal, setShowModal] = useState(false);

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

  const handleShowModal = (): void => {
    setShowModal(!showModal);
  };

  const handleUpdateGift = (giftId: string, newGift: GiftStructure) => {
    const updatedGifts = gifts.map((gift) => {
      if (gift.id === giftId) {
        return { ...gift, newGift };
      }
      return gift;
    });
    setGifts(updatedGifts);
  };

  return (
    <div className="container">
      <main className="main">
        <h1 className="app-title">Regalos</h1>
        {showModal && (
          <Modal onAddGifts={handleAddGift} onCloseModal={handleShowModal} />
        )}
        <Button text={"Add Gift"} action={handleShowModal} className={"add"} />
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
            onUpdateGift={handleUpdateGift}
          />
        )}
      </main>
    </div>
  );
};
export default App;
