import "./App.css";
import GiftList from "../GiftList/GiftList";
import { useState } from "react";
import { GiftStructure } from "../../types";
import { giftsApi } from "../../data";
import Modal from "../Modal/Modal";

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

  return (
    <div className="container">
      <main className="main">
        <h1 className="app-title">Regalos</h1>
        {showModal && (
          <Modal onAddGifts={handleAddGift} onCloseModal={handleShowModal} />
        )}
        <button className="form__button" onClick={handleShowModal}>
          Add Gift
        </button>
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
