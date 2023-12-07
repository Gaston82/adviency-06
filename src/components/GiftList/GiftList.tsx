import { GiftStructure } from "../../types";
import Gift from "../Gift/Gift";
import "./GiftList.css";

interface GiftListProps {
  gifts: GiftStructure[];
  onDeleteGift: (giftId: string) => void;
}

const GiftList = ({
  gifts,
  onDeleteGift,
}: GiftListProps): React.ReactElement => {
  return (
    <ul className="gift-list">
      {gifts.map((gift) => (
        <Gift gift={gift} key={gift.id} onDeleteGift={onDeleteGift} />
      ))}
    </ul>
  );
};

export default GiftList;
