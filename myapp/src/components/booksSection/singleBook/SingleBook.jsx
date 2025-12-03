import { useContext, useState } from "react";
import "./style.css";
import { Col, Card } from "react-bootstrap";
import CommentArea from "../../commentArea/CommentArea";
import ModalComment from "../modalComment/ModalComment";
import AddComment from "../../commentArea/addComment/AddComment";
import { SelectedBookContext } from "../../../context/SelectedBookContext";
import { ModalContext } from "../../../context/ModalContext";
import { Link } from "react-router-dom";
import { BookOpenCheck, Heart } from "lucide-react";
import { LikedContext } from "../../../context/LikedContext";

const SingleBook = ({ image, title, asin }) => {
  const { toggleLike, like } = useContext(LikedContext);
  const { handleShow } = useContext(ModalContext);

  const { isSelected, setIsSelected } = useContext(SelectedBookContext);

  const onChangeBook = () => {
    setIsSelected(asin);
  };

  const openModal = () => {
    handleShow();
    setIsSelected(asin);
  };

  return (
    <>
      <Col sm={12} md={4} lg={3}>
        <Card className="cardBook" border={like[asin] ? "success" : "transparent"}>
          <div>
            <button
              onClick={onChangeBook}
              className="btn-reviews d-none d-md-block"
            >
              Recensioni
            </button>
          </div>

          <div className="container-detail">
            <Link
              className="btn btn-detail p-0 text-center"
              to={`/book/${asin}`}
            >
              Dettagli
            </Link>
            <div onClick={() => toggleLike(asin)}>
              <BookOpenCheck
                size={"15px"}
                className="heart-icon"
                color={like[asin] ? "green" : "black"}
              />
            </div>
          </div>

          <div>
            <button onClick={openModal} className="btn-reviews d-md-none">
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
