import { GiftStructure } from "../../types";
import Button from "../Button/Button";
import "./Gift.css";

interface GiftProps {
  gift: GiftStructure;
  onDeleteGift: (giftId: string) => void;
}

const Gift = ({ gift, onDeleteGift }: GiftProps): React.ReactElement => {
  const handleDeleteGift = (): void => {
    onDeleteGift(gift.id);
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
      <Button text={"Update"} className={"update"} />
    </li>
  );
};

export default Gift;
