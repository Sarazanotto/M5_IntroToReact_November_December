import { useState } from "react";
import "./style.css";
import { Col, Card } from "react-bootstrap";

const SingleBook = ({ image, title }) => {
  const [isSelected, setIsSelected] = useState(false);

  const onChangeBook = () => {
    setIsSelected(!isSelected);
  };

  return (
    <Col sm={12} md={4} lg={3} onClick={onChangeBook}>
      <Card className="cardBook" border={isSelected ? "danger" : null}>
        <Card.Img className="imageBook w-100" src={image} alt={title} />
        <Card.Body>
          <Card.Title className="titleCard"> {title} </Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleBook;
