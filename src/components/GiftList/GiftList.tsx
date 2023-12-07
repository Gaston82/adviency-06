import { GiftStructure } from "../../types";
import Gift from "../Gift/Gift";
import "./GiftList.css";

interface GiftListProps {
  gifts: GiftStructure[];
  onDeleteGift: (giftId: string) => void;
  onDeleteGifts: () => void;
}

const GiftList = ({
  gifts,
  onDeleteGift,
  onDeleteGifts,
}: GiftListProps): React.ReactElement => {
  return (
    <>
      <ul className="gift-list">
        {gifts.map((gift) => (
          <Gift gift={gift} key={gift.id} onDeleteGift={onDeleteGift} />
        ))}
      </ul>
      <button className="form__button" onClick={onDeleteGifts}>
        Delete All
      </button>
    </>
  );
};

export default GiftList;
