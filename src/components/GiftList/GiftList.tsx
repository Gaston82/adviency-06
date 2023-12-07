import { GiftStructure } from "../../types";
import "./GiftList.css";

interface GiftListProps {
  gifts: GiftStructure[];
}

const GiftList = ({ gifts }: GiftListProps): React.ReactElement => {
  return (
    <ul className="gift-list">
      {gifts.map((gift) => (
        <li key={gift.id}>{gift.name}</li>
      ))}
    </ul>
  );
};

export default GiftList;
