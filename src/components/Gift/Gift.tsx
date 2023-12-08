import { GiftStructure } from "../../types";
import "./Gift.css";

interface GiftProps {
  gift: GiftStructure;
  onDeleteGift: (giftId: string) => void;
}

const Gift = ({ gift, onDeleteGift }: GiftProps): React.ReactElement => {
  return (
    <li className="gift">
      <h3>{gift.name}</h3>
      <button className="form__button" onClick={() => onDeleteGift(gift.id)}>
        Delete
      </button>
    </li>
  );
};

export default Gift;
