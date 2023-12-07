import { GiftStructure } from "../../types";
import Gift from "../Gift/Gift";
import "./GiftList.css";

interface GiftListProps {
  gifts: GiftStructure[];
}

const GiftList = ({ gifts }: GiftListProps): React.ReactElement => {
  return (
    <ul className="gift-list">
      {gifts.map((gift) => (
        <Gift gift={gift} key={gift.id} />
      ))}
    </ul>
  );
};

export default GiftList;
