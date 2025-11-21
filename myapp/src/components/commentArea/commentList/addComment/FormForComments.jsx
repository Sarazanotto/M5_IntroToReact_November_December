import React from 'react'
import { Form } from 'react-bootstrap'

const FormForComments = ({comments, setComments,rating,setRating}) => {

const onChange=(e)=>{
setComments(e.target.value)
}

  return (
  <Form>
    <Form.Control
    type='text'
    placeholder='scrivi una recensione...'
    onChange={onChange}
    value={comments}
    />
    

  </Form>
  )
}

export default FormForComments

