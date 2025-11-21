import React from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import './style.css'

const Welcome = () => {
  return (
  
   <Container className='containerHero py-5' >
    <Row className='align-items-center justify-content-center g-3'>
      <Col sm={12} md={6} className='d-flex flex-column text-center order-2'>
      <h1>EpicBooks</h1>
      <p className='m-0'>La tua libreria preferita <br />con migliaia di titoli</p>
      </Col>
      <Col sm={12} md={6} className='d-flex justify-content-center order-1'>
      <img className='img-fluid w-75 image-hero' src="https://www.picamemag.com/wp-content/uploads/2020/09/libri6-picame.png" alt="libri" /></Col>
    </Row>
   </Container>
   
  )
}

export default Welcome