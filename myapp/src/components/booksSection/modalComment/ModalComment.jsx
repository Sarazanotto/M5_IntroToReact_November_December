import React from "react";
import { Modal } from "react-bootstrap";

const ModalComment = ({ isOpen, setIsOpen, list, form }) => {
  return (
    <Modal show={isOpen} onHide={setIsOpen}>
      <Modal.Header closeButton>
        <Modal.Title>Le vostre recensioni</Modal.Title>
      </Modal.Header>
      <Modal.Body>{list}</Modal.Body>
      <Modal.Body>{form}</Modal.Body>
    </Modal>
  );
};

export default ModalComment;
