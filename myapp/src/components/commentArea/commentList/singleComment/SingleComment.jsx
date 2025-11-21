
import React from 'react'
import { Col } from 'react-bootstrap'

const SingleComment = ({author, comment, rate}) => {
  return (
<Col>
<p> `Autore ${author}` </p>
<p> `Autore ${comment}` </p>
<p> `Autore ${rate}` </p>

</Col>
  )
}

export default SingleComment
