import { useState } from "react";
import "./style.css";
import { Col, Card } from "react-bootstrap";
import CommentArea from "../../commentArea/CommentArea";
import ModalComment from "../modalComment/ModalComment";
import AddComment from "../../commentArea/addComment/AddComment";

const SingleBook = ({ image, title, asin }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [isOpen, setIsOpen] = useState(false);


  const onChangeBook = () => {
    setIsSelected(!isSelected);
  };

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <Col sm={12} md={4} lg={3} onClick={onChangeBook}>
        <Card className="cardBook" border={isSelected ? "danger" : null}>
          <div>
            <button onClick={openModal} className="button">
              Recensioni
            </button>
          </div>
          <Card.Img className="imageBook w-100" src={image} alt={title} />
          <Card.Body className="p-0">
            <Card.Title className="titleCard"> {title} </Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <ModalComment className='form-mode'
        isOpen={isOpen}
        setIsOpen={closeModal}
        list={<CommentArea asin={asin} />}
        form={<AddComment asin={asin}  />}
      />
    </>
  );
};

export default SingleBook;
