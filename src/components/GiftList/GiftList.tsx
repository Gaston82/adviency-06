import { GiftStructure } from "../../types";
import Button from "../Button/Button";
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
      <Button
        text={"Delete All"}
        className={"form__button"}
        action={onDeleteGifts}
      />
    </>
  );
};

export default GiftList;
