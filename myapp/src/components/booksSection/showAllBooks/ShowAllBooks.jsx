
import { Container, Row } from "react-bootstrap";
import SingleBook from "../singleBook/SingleBook";

const ShowAllBooks = ({books}) => {
  return (
    <>
      <Container className="px-5 mt-5">
        <Row className="g-2">
          {books.map(book => (
            <SingleBook 
            key={book.asin} 
            image={book.img} 
            title={book.title}
            asin={book.asin} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ShowAllBooks;
