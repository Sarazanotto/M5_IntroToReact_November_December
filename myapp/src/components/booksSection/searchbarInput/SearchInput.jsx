import React, { useState } from "react";
import "./style.css";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import CustomAlert from '../../costums/customAlert/CustomAlert';

const SearchInput = ({ books, setBooks }) => {
  const [search, setSearch] = useState("");
  const [originalBooks, setOriginalBooks] = useState(books);
  const [showAlert, setShowAlert] = useState(false);

  const onChange = (e) => {
    setSearch(e.target.value);
    if (e.target.value === "") {
      setBooks(originalBooks);
      setShowAlert(false)
    }
  };

  const onSearch = () => {
    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(search.toLowerCase())
    );
    if (filteredBooks.length === 0) {
      setShowAlert(true);
    } else {
      setBooks(filteredBooks);
      setShowAlert(false);
    }
  };

  return (
    
    <div className="containerMain mx-5">
      <Container className="mb-5 py-3">
        <Row className="justify-content-center ">
           {showAlert && (
            <CustomAlert variant='danger' text='Nessuna corrispondenza trovata'/>
          )}
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
      
    </div>
  );
};

export default SearchInput;
