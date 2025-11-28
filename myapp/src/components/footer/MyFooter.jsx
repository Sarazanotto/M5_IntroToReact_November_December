import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";

const MyFooter = () => {
  return (
    <Container fluid className="w-100 m-lg-5 p-3 border-top border-2">
      <Row className="px-3">
        <Col sm={12} md={4}>
          <h3>EpicBooks</h3>
        </Col>
        <Col sm={12} md={4}>
          <Nav.Link>Chi siamo</Nav.Link>
          <Nav.Link>Contatti</Nav.Link>
          <Nav.Link>Lavora con noi</Nav.Link>
        </Col>
        <Col sm={12} md={4}>
          <Nav.Link>Privicy</Nav.Link>
          <Nav.Link>Termini e condizioni</Nav.Link>
        </Col>
      </Row>
    </Container>
  );
};

export default MyFooter;
