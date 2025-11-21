import React, { useState } from 'react'
import { Alert, Col } from 'react-bootstrap'

const CostumAlert = ({variant, text}) => {


  return (
    <Col>
       <Alert variant={variant}>
        {text}
    </Alert>
    </Col>
   
  )
}

export default CostumAlert