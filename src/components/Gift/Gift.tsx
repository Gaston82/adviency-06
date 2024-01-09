import { GiftStructure } from "../../types";
import Button from "../Button/Button";
import "./Gift.css";

interface GiftProps {
  gift: GiftStructure;
  onDeleteGift: (giftId: string) => void;
  onUpdateGift: (giftId: string, newGift: GiftStructure) => void;
}

const Gift = ({
  gift,
  onDeleteGift,
  onUpdateGift,
}: GiftProps): React.ReactElement => {
  const handleDeleteGift = (): void => {
    onDeleteGift(gift.id);
  };

  const handleUpdateGift = () => {
    onUpdateGift(gift.id, gift);
  };

  return (
    <li className="gift">
      <img src={gift.image} alt="Gift photography" width={40} height={40} />
      <div>
        <h3>{gift.name}</h3>
        <span className="gift__recipient">{gift.to}</span>
      </div>
      <span>{gift.quantity}</span>
      <Button text={"Delete"} action={handleDeleteGift} />
      <Button text={"Update"} className={"update"} action={handleUpdateGift} />
    </li>
  );
};

export default Gift;
