import { GiftStructure } from "../../types";
import "./Gift.css";

interface GiftProps {
  gift: GiftStructure;
  onDeleteGift: (giftId: string) => void;
}

const Gift = ({ gift, onDeleteGift }: GiftProps): React.ReactElement => {
  return (
    <li className="gift">
      <img src={gift.image} alt="Gift photography" width={40} height={40} />
      <div>
        <h3>{gift.name}</h3>
        <span className="gift__recipient">{gift.to}</span>
      </div>
      <span>{gift.quantity}</span>
      <button className="form__button" onClick={() => onDeleteGift(gift.id)}>
        Delete
      </button>
    </li>
  );
};

export default Gift;
