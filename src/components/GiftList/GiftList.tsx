import { gifts } from "../../data";
import "./GiftList.css";

const GiftList = (): React.ReactElement => {
  return (
    <ul className="gift-list">
      {gifts.map((gift) => (
        <li key={gift.id}>{gift.name}</li>
      ))}
    </ul>
  );
};

export default GiftList;
