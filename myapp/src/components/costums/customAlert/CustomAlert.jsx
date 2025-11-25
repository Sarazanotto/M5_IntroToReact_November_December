import React, { useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";

const CostumAlert = ({ variant, text }) => {
  return (
    <Container>
      <Row>
        <Col>
          <Alert variant={variant}>{text}</Alert>
        </Col>
      </Row>
    </Container>
  );
};

export default CostumAlert;
