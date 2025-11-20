
import { Container, Row } from "react-bootstrap";
import SingleBook from "../singleBook/SingleBook";

const AllBooks = ({books}) => {
  return (
    <>
      <Container className="px-5">
        <Row className="g-4">
          {books.map(book => (
            <SingleBook 
            key={book.asin} 
            image={book.img} 
            title={book.title} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default AllBooks;
