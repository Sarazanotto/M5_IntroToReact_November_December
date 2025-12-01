import { useContext, useState } from "react";
import "./style.css";
import { Col, Card } from "react-bootstrap";
import CommentArea from "../../commentArea/CommentArea";
import ModalComment from "../modalComment/ModalComment";
import AddComment from "../../commentArea/addComment/AddComment";
import { SelectedBookContext } from "../../../context/SelectedBookContext";
import { ModalContext } from "../../../context/ModalContext";

const SingleBook = ({ image, title, asin }) => {
const {handleShow}=useContext(ModalContext)
  const [isOpen, setIsOpen] = useState(false);

  const {isSelected, setIsSelected}=useContext(SelectedBookContext)

  const onChangeBook = () => {
    setIsSelected(asin);
  };

const openModal=()=>{
  handleShow();
  setIsSelected(asin)
}



  return (
    <>
      <Col sm={12} md={4} lg={3} >
        <Card className="cardBook">
          <div>
            <button onClick={onChangeBook} className="button d-none d-md-block">
              Recensioni
            </button>
          </div>
          <div>
            <button onClick={openModal} className="button d-md-none">
              Recensioni
            </button>
          </div>
          <Card.Img className="imageBook w-100" src={image} alt={title} />
          <Card.Body className="p-0">
            <Card.Title className="titleCard"> {title} </Card.Title>
          </Card.Body>
        </Card>
      </Col>
     
    </>
  );
};

export default SingleBook;
