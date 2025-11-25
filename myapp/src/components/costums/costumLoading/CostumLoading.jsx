import React from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";

const CostumLoading = () => {
  return (
    <Container className="dvh-100">
      <Row className="justify-content-center align-items-center">
        <Col>
          <Spinner animation="grow" variant="dark" />
        </Col>
      </Row>
    </Container>
  );
};

export default CostumLoading;
