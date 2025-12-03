import React from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import CustumAlert from "../components/costums/customAlert/CustomAlert";
import { Link } from "react-router-dom";
import MainLayout from "../components/mainLayout/MainLayout";
 
const ErrorPage = () => {
  return (
    <MainLayout >
      <Container>
        <Row>
          <Col>
            <Alert variant="warning">
              {" "}
              Oooooops questa pagina non esiste,errore 404, torna alla hompage!
            </Alert>
          </Col>
        </Row>
        <Row>
          <Col className="text-center pt-5">
            <Link to={'/'} className="btn btn-outline-dark text-center">Homepage</Link>
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
};

export default ErrorPage;
