import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'

const AlertHero = () => {
const [showAlert, setShowAlert]= useState(true)

const show=()=>{
    setShowAlert(true)
}
const hide=()=>{
    setShowAlert(false)
}

  return (
    <Alert variant='danger' onClose={hide} dismissible>
        <Alert.Heading>da aggiungere un alert</Alert.Heading>
     
    </Alert>
  )
}

export default AlertHero