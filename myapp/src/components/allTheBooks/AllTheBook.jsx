import React from 'react'
import { Container,Row, Col} from 'react-bootstrap'
import books from './books/fantasy.json'
import SingleBook from './singleBook/SingleBook'


const AllTheBooks = () => {
  return (
   <Container>
    <Row className='g-3'>
{books.map(book=>(
  <Col  key={book.asin} sm={4} md={3} lg={2} >

  <SingleBook
 
  image={book.img}
  alt= {book.title}
  />
  </Col>
))} 
    </Row>
   </Container>
  )
}

export default AllTheBooks