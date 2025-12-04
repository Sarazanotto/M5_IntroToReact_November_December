import React from "react";
import MainLayout from "../components/mainLayout/MainLayout";
import './styleAbout.css'
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <MainLayout>
      <Container>
        <Row className="flex-column p-4 my-4 gap-5">
          <Col>
            <h4>Editori dal 1990</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ut
              distinctio nulla inventore, earum cupiditate mollitia. Atque
              facere asperiores architecto, tempora commodi ipsa numquam
              provident ipsum, vitae mollitia quas consequatur ut? Vero atque id
              ex eligendi eveniet. Maiores natus totam dolore facere tempore vel
              atque voluptas, odio minus soluta asperiores quas corrupti,
              ducimus in at deleniti, quasi reiciendis nisi cumque mollitia
              dolor. Aliquam facilis cupiditate porro iure nihil officiis
              voluptates maxime adipisci quaerat inventore eaque reiciendis iste
              hic nostrum incidunt sit aperiam eos asperiores neque, tempora
              voluptas facere? Rem dolore, expedita voluptates modi perspiciatis
              temporibus sunt odio incidunt pariatur repellendus?
            </p>
          </Col>
          <Col>
           <h4>Dove siamo</h4>
            <div className="container-map">
              <iframe className="frame-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44533.740732060585!2d11.685694464790389!3d45.76399922435957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4778da83832fc6bb%3A0x4a8087d14460dc7f!2s36061%20Bassano%20del%20Grappa%20VI!5e0!3m2!1sit!2sit!4v1764869694765!5m2!1sit!2sit"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div></Col>
        </Row>
      </Container>
    </MainLayout>
  );
};

export default About;
