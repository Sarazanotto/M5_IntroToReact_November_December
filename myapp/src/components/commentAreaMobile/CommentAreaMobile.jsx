import React, { useContext } from "react";
import { Modal } from "react-bootstrap";
import CommentArea from "../commentArea/CommentArea";
import AddComment from "../commentArea/addComment/AddComment";
import SingleComment from "../commentArea/singleComment/SingleComment";
import { ModalContext } from "../../context/ModalContext";
import { SelectedBookContext } from "../../context/SelectedBookContext";


const CommentAreaMobile = () => {
  const { show, handleClose } = useContext(ModalContext);
  const { isSelected } = useContext(SelectedBookContext);
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton />
      <Modal.Body>
        <CommentArea />
        <AddComment asin={isSelected} />
      </Modal.Body>
    </Modal>
  );
};

export default CommentAreaMobile;
