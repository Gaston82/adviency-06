import { GiftStructure } from "../../types";
import Button from "../Button/Button";
import Gift from "../Gift/Gift";
import "./GiftList.css";

interface GiftListProps {
  gifts: GiftStructure[];
  onDeleteGift: (giftId: string) => void;
  onDeleteGifts: () => void;
  onUpdateGift: (giftId: string, newGift: GiftStructure) => void;
}

const GiftList = ({
  gifts,
  onDeleteGift,
  onDeleteGifts,
  onUpdateGift,
}: GiftListProps): React.ReactElement => {
  return (
    <>
      <ul className="gift-list">
        {gifts.map((gift) => (
          <Gift
            gift={gift}
            key={gift.id}
            onDeleteGift={onDeleteGift}
            onUpdateGift={onUpdateGift}
          />
        ))}
      </ul>
      <Button text={"Delete All"} action={onDeleteGifts} />
    </>
  );
};

export default GiftList;
