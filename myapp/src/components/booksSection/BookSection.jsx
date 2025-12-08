import { useContext, useState } from "react";
import "./style.css";
import ShowAllBooks from "./showAllBooks/ShowAllBooks";

import { InputSearchContext } from "../../context/inputSearchContext";
import { Col, Container, Row } from "react-bootstrap";
import CommentArea from "../commentArea/CommentArea";
import { SelectedBookContext } from "../../context/SelectedBookContext";
import AddComment from "../commentArea/addComment/AddComment";
import CommentAreaMobile from "../commentAreaMobile/CommentAreaMobile";

const BookSection = () => {
  const { isSelected } = useContext(SelectedBookContext);
  const { books } = useContext(InputSearchContext);
  const [visibleBook, setVisibleBook] = useState(20);

  const loadLessBook = () => {
    setVisibleBook((book) => Math.max(book - 20, 20));
  };

  const loadBook = () => {
    setVisibleBook((book) => Math.min(book + 20, books.length));
  };

  return (
    <main className="mb-5">
      <Container>
        <Row className="align-items-start">
          <Col sm={12} md={8} className="d-flex flex-column">
            {" "}
            <ShowAllBooks books={books.slice(0, visibleBook)} />
            <div className="dvh-100 d-flex justify-content-center m-5 gap-5">
              <button className="btn btn-form text-light" onClick={loadBook}>
                Show More
              </button>
              <button
                className="btn btn-form text-light"
                onClick={loadLessBook}
              >
                Show Less
              </button>
            </div>
          </Col>
          <Col sm={12} md={4} className="sectionComment">
            <CommentArea asin={isSelected} />
            <AddComment asin={isSelected} />
          </Col>
        </Row>
      </Container>
      <CommentAreaMobile />
    </main>
  );
};

export default BookSection;
