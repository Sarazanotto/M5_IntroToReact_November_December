import React from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";

const CostumLoading = () => {
  return (
    <Container className="min-vh-100">
      <Row className="h-100">
        <Col className="d-flex justify-content-center align-items-center ">
          <Spinner animation="grow" variant="dark" />
        </Col>
      </Row>
    </Container>
  );
};

export default CostumLoading;
