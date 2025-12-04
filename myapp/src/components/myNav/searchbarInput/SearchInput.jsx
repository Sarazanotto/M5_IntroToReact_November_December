import React, { useContext, useState } from "react";
import "./style.css";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import CustomAlert from "../../costums/customAlert/CustomAlert";
import { InputSearchContext, InputSearchProvider } from "../../../context/inputSearchContext";

const SearchInput = () => {
const {books,setBooks}=useContext(InputSearchContext)

  const [search, setSearch] = useState("");
  const [originalBooks, setOriginalBooks] = useState(books);
  const [showAlert, setShowAlert] = useState(false);

  const onChange = (e) => {
    setSearch(e.target.value);
    if (e.target.value === "") {
      setBooks(originalBooks);
      setShowAlert(false);
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
    <>
      <div className="containerMain w-100 d-flex flex-column flex-md-roaw gap-2">
        <Container className="py-3">
          <Row className="justify-content-center ">
       
            <Col sm={12} md={8}>
              <Form className="d-flex gap-3 inputForm">
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
                 <Col sm={12} md={4}></Col>
          </Row>
        </Container>
      </div>

      <Container>
        <Row>
          {showAlert && (
            <CustomAlert
              variant="danger"
              text="Nessuna corrispondenza trovata"
            />
          )}
        </Row>
      </Container>
    </>
  );
};

export default SearchInput;
