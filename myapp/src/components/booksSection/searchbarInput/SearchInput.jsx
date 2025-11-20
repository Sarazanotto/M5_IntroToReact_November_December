import React, { useState } from "react";
import "./style.css";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const SearchInput = ({ books, setBooks, originalBooks }) => {
  const [search, setSearch] = useState("");

  const onChange = (e) => {
    setSearch(e.target.value);
    if (e.target.value === "") {
      setBooks(originalBooks);
    }
  };

  const onSearch = () => {
    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(search.toLowerCase())
    );
    setBooks(filteredBooks);
  };

  return (
    <Container className="my-5 py-5">
      <Row className="justify-content-center ">
        <Col sm={12} md={6}>
          <Form className="d-flex gap-3">
            <Form.Control
              className="formControl"
              onChange={onChange}
              type="text"
              placeholder="Cerca per titolo"
            />
            <Button className="btn btnSearch" onClick={onSearch}>
              Cerca
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchInput;
