import React from "react";
import Form from "../Form/Form";
import { GiftStructure } from "../../types";
import "./Modal.css";

interface ModalProps {
  onAddGifts: (gift: GiftStructure) => void;
  onCloseModal: () => void;
}

const Modal = ({
  onAddGifts,
  onCloseModal,
}: ModalProps): React.ReactElement => {
  return (
    <div className="modal-container">
      <Form onAddGifts={onAddGifts} onCloseModal={onCloseModal} />
    </div>
  );
};

export default Modal;
