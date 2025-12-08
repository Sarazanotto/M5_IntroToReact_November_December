import React, { useEffect, useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";

const CostumAlert = ({ variant, text }) => {
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);
    return()=> clearTimeout(timer)
  },[]);

  return (
    <Container className="my-2">
      {isVisible && (
        <Row>
          <Col>
            <Alert variant={variant}>{text}</Alert>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default CostumAlert;
