import { GiftStructure } from "../../types";
import "./Gift.css";

interface GiftProps {
  gift: GiftStructure;
  onDeleteGift: (giftId: string) => void;
}

const Gift = ({ gift, onDeleteGift }: GiftProps): React.ReactElement => {
  return (
    <li className="gift">
      {gift.name}{" "}
      <button className="form__button" onClick={() => onDeleteGift(gift.id)}>
        X
      </button>
    </li>
  );
};

export default Gift;
