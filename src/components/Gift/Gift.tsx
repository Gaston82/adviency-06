import { GiftStructure } from "../../types";
import "./Gift.css";

interface GiftProps {
  gift: GiftStructure;
}
const Gift = ({ gift }: GiftProps): React.ReactElement => {
  return <li className="gift">{gift.name}</li>;
};

export default Gift;
